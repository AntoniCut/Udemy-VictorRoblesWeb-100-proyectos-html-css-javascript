//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-15-js/assets/js/13-main.js  ********** 
//  ************************************************************


/*
    ----------  Enunciado Proyecto 15  ----------  

    -  Maqueta una web con estas tarjetas. Ver PDF.
    -  Luego, añade mediante JS, a todas las tarjetas, 
       un botón de eliminar deberá quedar de esta forma. Ver PDF.
*/


window.addEventListener("DOMContentLoaded", () => {
    
    //  -----  Referencias al HTML  -----
    const cards = document.querySelectorAll(".layout__card");

    cards.forEach((card) => {
        
        //  -----  Seleccionar botón de cambiar estilos existente -----
        const btnChangeEstilos = card.querySelector(".content__btn");

        //  -----  Crear botón de eliminar  -----
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar Tarjeta";
        btnEliminar.classList.add("delete__btn");

        //  -----  Agregar el botón de eliminar a cada tarjeta  -----
        card.appendChild(btnEliminar);

        //  -----  Evento para cambiar el color de la tarjeta -----
        btnChangeEstilos.addEventListener("click", () => {
            if (card.style.backgroundColor === "red")
                card.style.backgroundColor = "#0D6EFD"; // Vuelve al color original (Azul)
            else 
                card.style.backgroundColor = "red"; // Cambia a rojo
            
        });

        //  -----  Evento para eliminar la tarjeta  -----
        btnEliminar.addEventListener("click", () => {
            card.remove();
        });
    });

});
