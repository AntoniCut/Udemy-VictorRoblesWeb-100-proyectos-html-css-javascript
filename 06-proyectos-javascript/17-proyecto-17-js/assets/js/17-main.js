//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-17-js/assets/js/13-main.js  ********** 
//  ************************************************************


/*
    ----------  Enunciado Proyecto 17  ----------  

     -  Utiliza los estilos del proyecto 15. Ver PDF.
     -  Cuando hagamos clic en el botón de cambiar estilos se cambiarán para verse así. Ver PDF.
*/



window.addEventListener("DOMContentLoaded", () => {

    //  -----  Referencias al HTML  -----
    const cards = document.querySelectorAll(".layout__card");
    
    cards.forEach((card) => {

        //  -----  Referencias al HTML  -----
        const header = document.querySelector('.card__header');
        const description = document.querySelector('.content__description');
        const btnChangeEstilos = card.querySelector(".content__btn");

        //  -----  Seleccionar botón de cambiar estilos existente -----
        btnChangeEstilos.addEventListener('click', () => {

            card.classList.toggle("active");  
            header.classList.toggle("active");
            description.classList.toggle("active");
            btnChangeEstilos.classList.toggle("active");
            
            if(card.classList.contains('active'))
                btnChangeEstilos.textContent = "Estilos Iniciales";
            else
                btnChangeEstilos.textContent = "Cambiar estilos";
        });

    });

});
