//  **********  /04-curso-100-proyectos-html-css-js  ************** 
//  **********  /06-proyectos-javascript/  ************************ 
//  **********  /proyecto-07-js/assets/js/07-main-v1.js  ********** 
//  ***************************************************************


/*
     ----------  Enunciado Proyecto 4  ----------  

    -  Pidele al usuario su año de nacimiento en una ventana emergente
       y calcula cuántos años tiene actualmente.
    -  Si el año de nacimiento es menor de 1910 volver a pedir el año. 
*/


const actualYear = new Date().getFullYear();
let year = 1990;
let result = 0;

do {

    year = parseInt(prompt('¿En que año naciste?', year));

} while (year < (actualYear - 150) || year > actualYear);

result = actualYear - year;
alert('tienes ' + result + ' años');

const resultado = document.querySelector('#resultado');
resultado.innerHTML = `
    <h3> Tienes ${result} años </h3>
`;