//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-26-js/assets/js/26-main.js  ********** 
//  ************************************************************


/*
      ----------  Enunciado Proyecto 26  ----------  

    -  Maqueta este formulario y al pulsar en el ojo que se muestre la contraseña. Ver PDF.
                                  
*/


document.addEventListener("DOMContentLoaded", () => {

    //  -----  Referencias al HTML  -----
    const grayStar = document.querySelector('.main__star--gray');
    const yellowStar = document.querySelector('.main__star--yellow');

    grayStar.addEventListener('click', () => {
        yellowStar.classList.add('visible');
        grayStar.classList.add('yellow-color');
    });


    yellowStar.addEventListener('click', () => {
        yellowStar.classList.remove('visible');
        grayStar.classList.remove('yellow-color');
    });
    
    
});
