//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-22-js/assets/js/22-main.js  ********** 
//  ************************************************************


/*
    ----------  Enunciado Proyecto 22  ----------  

    -  Vamos a hacer un buscador de palabras en un texto.
       Primero maqueta la web así y luego haz que al encontrar la palabra se marque en purpura. Ver PDF.
    
    -  Texto para el proyecto:
        
        JavaScript es un lenguaje de programación ampliamente utilizado en el desarrollo web. A
        menudo se le conoce como el "lenguaje de la web" porque se utiliza principalmente para crear
        interacciones dinámicas en sitios web. Fue creado originalmente para dar vida a las páginas
        web, permitiendo a los desarrolladores agregar funcionalidades como formularios interactivos,
        animaciones y actualizaciones en tiempo real.
                                  
*/


window.addEventListener("DOMContentLoaded", () => {

    //  -----  Referencias al HTML  -----
    const input = document.querySelector(".main__input");
    const text = document.querySelector(".main__text");
    

    //  -----  Guarda el texto original para restaurarlo  -----
     const originalText = text.textContent;


    input.addEventListener("keydown", (e) => {
        
        const search = input.value;

        if (search.trim() != "" && e.key === "Enter") {
            
            let regExp = new RegExp(search, "gi");
            text.innerHTML = text.textContent.replace(regExp, `<span class="text__search">${search}</span>`);
        }

    });


     //  -----  Evento para detectar cuando el usuario borra el texto (incluyendo la "X")  -----
     input.addEventListener("input", () => {
        
        if (input.value.trim() === "") 
            text.innerHTML = originalText; // Restaurar el texto original
    });

    
});
