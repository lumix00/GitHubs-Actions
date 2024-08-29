window.onload = function () {
  fetch("planetas.json")
    .then((response) => response.json())
    .then((data) => {
      const planeta = new URLSearchParams(window.location.search).get(
        "planeta"
      );

      console.log(data[planeta]);
      getFotoPontos(data[planeta].pontos);
      getPontosPlaneta(data[planeta]);
      getInfoPlaneta(data[planeta]);
    })
    .catch((error) => {
      console.error("Falha ao obter dados do planeta. Erro ", error);
    });
};

function getPontosPlaneta(dados) {
  const planeta = document.querySelector(".imagem-planeta");
  planeta.setAttribute("style", `background-image: url(${dados.img});`);
  const conteudo = dados.pontos.map((element) => {
    return `<div class="ponto" id="ponto-${element.posicao}">
              <div
                class="ponto-interno"
                onmouseover="ponto_over('caixa-${element.posicao}')"
                onmouseout="ponto_out('caixa-${element.posicao}')"
              ></div>
            </div>`;
  });
  planeta.innerHTML = conteudo.join("");
}

function getInfoPlaneta(dados) {
  const caixaTexto = document.querySelector(".caixa-texto");
  const aparicoes = dados.aparicoes
    .map((element) => {
      return `<em>${element}</em>`;
    })
    .join(", ");

  caixaTexto.innerHTML = `
    <div class="titulo">
      <h1>${dados.nome}</h1>
      <div class="titulo-interno"></div>
    </div>
    <p>
      ${dados.descricao}
    </p>
    <p>
      <b>Aparições em filmes de Star Wars:</b>
      ${aparicoes}.
    </p>
  `;
}

function getFotoPontos(dados) {
  const div = document.querySelector(".imagem-ponto");
  const conteudo = dados.map((element) => {
    return `<div class="caixa-texto" id="caixa-${element.posicao}" hidden>
              <span>${element.nome}</span><br /><br />
              <img src=${element.img} height="75%" width="75%" />
            </div>`;
  });
  div.innerHTML = conteudo.join("");
}
