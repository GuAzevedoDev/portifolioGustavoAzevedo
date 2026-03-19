export default function initTime() {
  function atualizarHora() {
    const agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();

    // Formata com dois dígitos
    const horaFormatada = `${horas.toString().padStart(2, "0")}:${minutos
      .toString()
      .padStart(2, "0")}`;

    // Dia da semana e data em português
    const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    const diaSemana = dias[agora.getDay()];
    const dia = agora.getDate().toString().padStart(2, "0");
    const mes = agora.toLocaleString("pt-BR", { month: "short" }); // ex: nov

    const dataFormatada = `${diaSemana}, ${dia} ${
      mes.charAt(0).toUpperCase() + mes.slice(1)
    }`;

    // Atualiza o HTML
    const hourEl = document.querySelector(".hour");
    const dayEl = document.querySelector(".day");
    if (hourEl) hourEl.textContent = horaFormatada;
    if (dayEl) dayEl.textContent = dataFormatada;
  }

  // Atualiza ao carregar
  atualizarHora();

  // Atualiza a cada 30 segundos
  setInterval(atualizarHora, 30000);
}
