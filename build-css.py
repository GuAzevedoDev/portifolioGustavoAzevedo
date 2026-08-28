import re, os, sys

def ler_com_imports(caminho, vistos=None):
    """Resolve @import recursivamente, como o clean-css --inline."""
    vistos = vistos or set()
    caminho = os.path.normpath(caminho)
    if caminho in vistos: return ""
    vistos.add(caminho)
    base = os.path.dirname(caminho)
    s = open(caminho, encoding="utf-8").read()
    def troca(m):
        alvo = os.path.normpath(os.path.join(base, m.group(1)))
        return ler_com_imports(alvo, vistos)
    return re.sub(r'@import\s+["\']([^"\']+)["\']\s*;', troca, s)

def minificar(css):
    # protege strings e url() antes de mexer em espaços
    guarda = []
    def esconder(m):
        guarda.append(m.group(0))
        return f"\x00{len(guarda)-1}\x00"
    css = re.sub(r'"[^"\\]*(?:\\.[^"\\]*)*"|\'[^\'\\]*(?:\\.[^\'\\]*)*\'|url\([^)]*\)', esconder, css)

    # calc/min/max/clamp precisam dos espaços ao redor de + e -: sem eles a
    # expressão é inválida e o navegador descarta a declaração inteira.
    # Protege a função completa, respeitando parênteses aninhados.
    def esconder_math(texto):
        saida = []
        i = 0
        while i < len(texto):
            m = re.compile(r'\b(calc|min|max|clamp)\(').search(texto, i)
            if not m:
                saida.append(texto[i:]); break
            saida.append(texto[i:m.start()])
            j = m.end(); nivel = 1
            while j < len(texto) and nivel:
                if texto[j] == '(': nivel += 1
                elif texto[j] == ')': nivel -= 1
                j += 1
            guarda.append(re.sub(r'\s+', ' ', texto[m.start():j]))
            saida.append(f"\x00{len(guarda)-1}\x00")
            i = j
        return "".join(saida)
    css = esconder_math(css)

    css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)          # comentários
    css = re.sub(r'\s+', ' ', css)                            # espaços em série
    css = re.sub(r'\s*([{};:,>~+])\s*', r'\1', css)           # ao redor de pontuação
    css = re.sub(r';}', '}', css)                             # ponto-e-vírgula final
    css = re.sub(r'\)\s*and\s*\(', ') and (', css)            # media queries
    css = re.sub(r'([:,])(\d)', r'\1\2', css)
    css = re.sub(r'\band\(', 'and (', css)
    css = re.sub(r'(@media[^{]*?)\(', r'\1 (', css)
    css = re.sub(r'\s{2,}', ' ', css)
    css = css.strip()

    for i, original in enumerate(guarda):                     # devolve o protegido
        css = css.replace(f"\x00{i}\x00", original)
    return css

if __name__ == "__main__":
    entrada, saida = sys.argv[1], sys.argv[2]
    bruto = ler_com_imports(entrada)
    mini = minificar(bruto)
    open(saida, "w", encoding="utf-8").write(mini)
    print(f"{len(bruto):>8} bytes concatenados")
    print(f"{len(mini):>8} bytes minificados  ({100 - len(mini)*100//len(bruto)}% menor)")

# Uso: python3 build-css.py Estilos/style.css Estilos/style.min.css
# Resolve os @import, remove comentários e espaços, preservando strings,
# url() e as funções matemáticas (calc/min/max/clamp), onde os espaços ao
# redor de + e - fazem parte da sintaxe.
