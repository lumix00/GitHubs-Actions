window.onload = function () {
  const json = "./detalhesPlaneta/planetas.json";

  $.getJSON(json, function (data) {
    const fullData = data;

    const planetDivs = document.querySelectorAll(".planeta");
    planetDivs.forEach(function (planet) {
      const id = planet.getAttribute("id");
      const planetData = fullData[id];

      const tooltip =
        id === "dagobah" || id === "estrelaII" ? "tooltip-esquerda" : "tooltip";

      planet.innerHTML = `<img
        src=${planetData.img.slice(1)}
        onclick="navigate('${id}')"
        height: 100%
        width: 100%
      />
      <div class=${tooltip}>
        <span class="nome-planeta">${planetData.nome}</span>
        <hr />
        <div class="informacoes-planeta">
          <span>
            <b>Tamanho:</b> ${planetData.tamanho}
          </span>
          <span>
            <b>População:</b> ${planetData.populacao}
          </span>
          <span>
            <b>Período Orbital:</b> ${planetData.cicloOrbital}
          </span>
          <span>
            <b>Período de Rotação:</b> ${planetData.cicloRotacao}
          </span>
          <span>
            <b>Clima:</b> ${planetData.clima}
          </span>
          <span>
            <b>Terreno:</b> ${planetData.terreno}
          </span>
        </div>
      </div>`;
    });
  });
};
