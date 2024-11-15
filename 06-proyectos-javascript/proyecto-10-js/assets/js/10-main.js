//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-10-js/assets/js/10-main.js  ********** 
//  ************************************************************


/*
     ----------  Enunciado Proyecto 9  ----------  

    -  Crea una función que sume una cantidad indefinida de números
       pasados por parámetro.
    
    -  Muestra el Resultado en un encabezado de segundo nivel (h2).
    -  Muestra los números que se han utilizado para el resultado debajo en un párrafo.
*/


//  -----  Referencias al HTML  -----
const resultBox = document.getElementById('result');
const h2 = document.createElement('h2');

let word = prompt('¿Introduce una palabra');

const countAndUpperLetter = (word) => {

    const upper = word.toUpperCase();
    const counter = word.length;

    return "La palabra ha sido - " + upper + " - y tiene " + counter + " letras.";
}

alert(countAndUpperLetter(word));
h2.innerText = countAndUpperLetter(word);
resultBox.appendChild(h2);
