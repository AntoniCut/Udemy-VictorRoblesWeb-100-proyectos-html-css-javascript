//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-27-js/assets/js/26-main.js  ********** 
//  ************************************************************


/*
        ----------  Enunciado Proyecto 27  ----------  

    -  La web debe verse así por defecto (full screen). Ver PDF.
    -  A pasar el ratón por encima de cualquiera de los artículos deberá mostrarse de esta manera. Ver PDF.
    -  Cuando el ratón deje de estar encima deberá volver a su estado por defecto.
    -  Debes hacer una “transición suavizada y animada con CSS” y está prohibido el uso de
       pseudoclases en CSS.
    -  No puedes usar :hover, solo eventos de JavaScript.

                                  
*/


document.addEventListener("DOMContentLoaded", () => {

    //  -----  Referencias al HTML  -----
    const articleLeft = document.querySelector('.main__article--left');
    const articleRight = document.querySelector('.main__article--right');


    articleLeft.addEventListener('mouseenter', () => {
        articleLeft.classList.add('active');
        articleRight.classList.add('inactive');
    });


    articleLeft.addEventListener('mouseleave', () => {
        articleLeft.classList.remove('active');
        articleRight.classList.remove('inactive');
    });


    articleRight.addEventListener('mouseenter', () => {
        articleRight.classList.add('active');
        articleLeft.classList.add('inactive');
    });


    articleRight.addEventListener('mouseleave', () => {
        articleRight.classList.remove('active');
        articleLeft.classList.remove('inactive');
    });
    
    
    
});
