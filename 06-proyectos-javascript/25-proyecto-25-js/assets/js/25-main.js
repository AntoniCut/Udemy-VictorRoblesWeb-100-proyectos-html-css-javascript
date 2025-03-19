//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-24-js/assets/js/22-main.js  ********** 
//  ************************************************************


/*
      ----------  Enunciado Proyecto 24  ----------  

    -  Maqueta este formulario y al pulsar en el ojo que se muestre la contraseña. Ver PDF.
                                  
*/


window.addEventListener("DOMContentLoaded", () => {

    //  -----  Referencias al HTML  -----
    const emojiContainer = document.querySelector(".emojis__emoji");
    const arrEmojis = ['💘','💝','💖','💗','💓','💞','💕','💟','❣️','💔','❤️','🧡','💛','💚','💙','💜','🤎','🖤','🤍','❤️‍','🔥','❤️‍','🩹','💯','♨️','💢','💬','👁️‍🗨️','🗨️','🗯️','💭','💤','🌐','♠️','♥️','♦️','♣️','🃏','🀄️','🎴','🎭️','🔇','🔈️','🔉','🔊','🔔','🔕','🎼','🎵','🎶','💹','🏧','🚮','🚰','♿️','🚹️','🚺️','🚻','🚼️','🚾','🛂','🛃','🛄','🛅','⚠️','🚸','⛔️','🚫'];
    

    emojiContainer.addEventListener("mouseleave", () => {
        
        let random = Math.ceil(Math.random() * arrEmojis.length - 1);

        console.log(arrEmojis.length, ' - ', random, ' - ', arrEmojis[random]);
        emojiContainer.innerHTML = arrEmojis[random];
        
    });
    
});
