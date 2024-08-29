let hasUserInteracted = false;
let isAudioPlaying = false;

function firstClick() {
  if (!hasUserInteracted) {
    return (hasUserInteracted = true);
  }
}

function navigate(id) {
  window.location.href = `./detalhesPlaneta/?planeta=${id}`;
}

function menu() {
  history.back();
}

function hoverSound() {
  const path = window.location.href.includes("detalhesPlaneta") ? "../" : ".";
  const audio = new Audio(path + "/audios/beep.mp3");
  audio.play();
}

function ambientSound() {
  if (hasUserInteracted && !isAudioPlaying) {
    let audio;
    const destino = new URLSearchParams(window.location.search)?.get("planeta");

    if (destino === "estrelaI" || destino === "estrelaII") {
      audio = new Audio("../audios/marcha.mp3");
      audio.volume = 0.7;
    } else {
      const escolha = Math.floor(Math.random() * 4);
      const path = window.location.href.includes("detalhesPlaneta")
        ? "../"
        : ".";
      switch (escolha) {
        case 0:
          audio = new Audio(path + "/audios/ambient.mp3");
          break;
        case 1:
          audio = new Audio(path + "/audios/ambient2.mp3");
          break;
        case 2:
          audio = new Audio(path + "/audios/ambient3.mp3");
          break;
        default:
          audio = new Audio(path + "/audios/ambient4.mp3");
          break;
      }
      audio.volume = 0.6;
    }

    isAudioPlaying = true;
    audio.loop = true;
    audio.load();
    audio.play();
  }
}

function ponto_over(id) {
  hoverSound();
  let e = document.getElementById(id);
  e.hidden = false;
}

function ponto_out(id) {
  let e = document.getElementById(id);
  e.hidden = true;
}
