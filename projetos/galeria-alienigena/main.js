var selectedCharacter = null
$(document).ready(() => {
    $.getJSON("characters.json", json => {
        json.characters.forEach(character => {
            $("#character-selection").append(`
                <div class="character" id="${character.characterID}">
                    <div class="character-pic" style="background-image: url('${character.image}');"></div>

                    <div class="character-name">${character.name}</div>

                    <div class="character-description" style="display: none;">${character.description}</div>
                </div>
            `)

            $(`#${character.characterID}`).click(event =>{
                $("#character-full-pic").css("background-image", `url('${character.image}')`)
                $("#character-description").html(character.description)
            })
        })
    })
})

var byline = document.getElementById('byline'); 
bylineText = byline.innerHTML;
bylineArr = bylineText.split(''); 
byline.innerHTML = '';  

var span;   
var letter;

for(i=0;i<bylineArr.length;i++){                  
  span = document.createElement("span");          
  letter = document.createTextNode(bylineArr[i]); 
  if(bylineArr[i] == ' ') {                       
    byline.appendChild(letter);         
  } else {
    span.appendChild(letter);           
    byline.appendChild(span);           
  }

}