//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-15-js/assets/js/13-main.js  ********** 
//  ************************************************************


/*
    ----------  Enunciado Proyecto 16  ----------  

    -  Muestra por pantalla el ancho, alto y URL de la web en la que te encuentras
       actualmente, ademas de entrar a la web automáticamente deberá cargar
       en otra pestaña https://victorroblesweb.es/ruta.
*/


window.addEventListener("DOMContentLoaded", () => {
    
    const data = document.querySelector("#data");


    const actualizarInfo = () => {
        
        const info = `
            <br> 
            <h2> Navegador </h2>
            <h3> Anchura: ${screen.width} px </h3>
            <h3> Altura: ${screen.height} px </h3>
            <h3> URL: ${window.location.href} </h3>
            <br> <hr> <br>
            <h2> Ventana </h2>
            <h3>Anchura: ${window.innerWidth} px </h3>
            <h3> Altura: ${window.innerHeight} px </h3>
            <h3> URL: ${window.location.href} </h3>
        `;

        data.innerHTML = info;
    }

    //  -----  Mostrar info inicial  -----
    actualizarInfo();

    //  -----  Abrir la nueva página en una ventana aparte  -----
    window.open('https://victorroblesweb.es/ruta', "_blank");

    //  -----  Actualizar info en cada resize de la ventana  -----
    window.addEventListener('resize', actualizarInfo);

});

