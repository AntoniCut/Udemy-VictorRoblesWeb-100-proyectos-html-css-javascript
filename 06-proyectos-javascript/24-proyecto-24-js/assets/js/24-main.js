//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-22-js/assets/js/22-main.js  ********** 
//  ************************************************************


/*
      ----------  Enunciado Proyecto 24  ----------  

    -  Maqueta este formulario y al pulsar en el ojo que se muestre la contraseña. Ver PDF.
                                  
*/


window.addEventListener("DOMContentLoaded", () => {

    //  -----  Referencias al HTML  -----
    const input = document.querySelector(".form__input");
    const icon = document.querySelector(".form__eye > .fa-solid");
        

    icon.addEventListener("click", () => {
        
        if (input.type === "password" && input.value.trim() != "")
            input.type = "text";
        
        else
            input.type = "password";
        
    });
    
});
