//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-02-js/assets/js/02-main.js  ********** 
//  ************************************************************


/*
    ----------  Enunciado Proyecto 2  ----------  
    -  1. Crea un fichero JavaScript y vinculalo con tu fichero HTML. 
    -  2. Debes crear las variables: marca, velocidad, stock y modelos (array).
    -  3. Mostrar las variables por la pantalla (con una frase).
    -  4. Mostrar todos los elementos del array (sin hacerlo manualmente). 
*/


window.addEventListener('DOMContentLoaded', () => {


    //  -----  1. Crea un fichero JavaScript y vinculalo con tu fichero HTML   -----
    alert('Proyecto 2 JavaScript - Fichero Vinculado');


    //  -----  2. Debes crear las variables: marca, velocidad, stock y modelos (array)  -----
    let marca = 'Audi';
    let velocidad = '250 Km/h';
    let stock = 349;

    let modelos = [
        'A3',
        'Q3',
        'A6',
        'Q8',
        'A1',
        'Q2'
    ];


    //  -----  3. Mostrar las variables por la pantalla (con una frase)  -----
    //  -----  4. Mostrar todos los elementos del array (sin hacerlo manualmente) <ul> </ul>  -----

    const content = document.querySelector('#content');

    content.innerHTML = `
        
        <h2> Tenemos cohe de la marca... </h2>
        <p> Marca: ${marca} </p>
        <p> Velocidad: ${velocidad} </p>
        <p> Stock: ${stock} </p>
        <h3> Modelos disponibles: </h3>
    
        <ul>
            ${modelos.map(modelo => `<li>${modelo}</li>`).join('')}
        </ul>
    `;
})
