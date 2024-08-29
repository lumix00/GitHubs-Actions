function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  

  function carregarDetalhes() {
    
    var itemId = getParameterByName('id');
  
    var imagens = {
      '1': 'https://static.wikia.nocookie.net/a21f9e7d-1565-4500-917f-545d4d0ab437',
      '2': 'https://static.wikia.nocookie.net/cd44001f-fb37-4b91-8d1d-df77f105cd9c',
      '3': 'https://www.icegif.com/wp-content/uploads/star-wars-icegif-8.gif',
      '4': 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnhlYTVmbG1remFpeG83NHIzdDc5bzdjODIzamhyYmFhajh1OWF5MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7abrIVCzBfv8O8aA/giphy.gif',
      '5': 'https://www.icegif.com/wp-content/uploads/star-wars-funny-icegif-4.gif'
    };
    var titulos = {
        '1': 'Batalha de Sisifo',
        '2': 'BATALHA DE HALLAD',
        '3': 'BATALHA DE CORAH',
        '4': 'BATALHA DE MORAGA',
        '5': 'BATALHA DE NEXURIAN'
      };
      var detalhes = {
        '1': 'Entre uma batalha injusta de 2x1 (dois contra um), o incrível amigo de sabre vermelho mete um chute na costela de nosso Anakin Skywalker, jogando-o para longe contra uma parede resistente, em seguida agarra nosso querido Han, pelo poder da força, como forme de estrangular e, em seguida, também o joga contra a mesma parede.',
        '2': 'Em uma batalha espacial, com várias aeronaves tecnológicas, correndo contra o escuridão do espaço, em questão de segundos surge do abismo uma mega nave espacial destruidora de mundos, onde todas as naves menores começam a atirar e rajar tiros verdes contra, até causando explosões de naves.',
        '3': 'Em um ambiente cheio de neve, talvez o polo norte (?), há uma épica batalha de sabres de luz entre uma mulher que parece se defender e um cara muito raivoso, tentando-a matar, desferindo diversos golpes com força, seria essa uma briga de casal?',
        '4': 'Aparentemente a batalha a seguir se trata dentro da mega nave espacial citada na batalha nl citada na batalha nº3, onde é possível ver de fundo naves pequenas que disparam rajadas da cor verde. Essa batalha se trata agora de duas pessoas com raivas, onde ambas querem se aniquilar, haja o que houver, ao mesmo tempo que é necessário se defender também é importante contra-atacar.',
        '5': 'Mais uma batalha de nosso querido Anakin Skywalker, onde luta contra um raivoso cara vermelha (caveira vermelha?), que possui um sabre de luz com duas pontas, sendo muito mais poderoso em seus golpes, porém Anakin é ágil e consegue se esquivar perfeitamente e se prepara para contra-atacar.'
      };


    setTimeout(function() {
     
      var batalhaTitulo = "<h2> " + titulos[itemId] + "</h2>";
      var batalhaGif = "<img src='" + imagens[itemId] + "' alt='Imagem do Item'>";
      var batalhaText = "<p>" + detalhes[itemId] + "</p>";

      document.getElementById("batalhas-gif").innerHTML = batalhaGif;
      document.getElementById("batalhas-titulo").innerHTML = batalhaTitulo;
      document.getElementById("batalhas-textos").innerHTML = batalhaText;

    }, 500); 
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    carregarDetalhes();
  });
  