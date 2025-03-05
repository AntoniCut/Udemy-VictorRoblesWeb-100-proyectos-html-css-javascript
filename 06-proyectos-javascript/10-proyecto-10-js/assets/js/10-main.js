//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-10-js/assets/js/10-main.js  ********** 
//  ************************************************************


/*
     ----------  Enunciado Proyecto 9  ----------  

    -  Crea una función que sume una cantidad indefinida de números
       pasados por parámetro.
        
*/


//  -----  Referencias al HTML  -----
const resultBox = document.getElementById('result');

let word = prompt('¿Introduce una palabra', 'Hola Mundo!!!');

const countAndUpperLetter = (word) => {

    const upper = word.toUpperCase();
    const counter = word.length;

    return "La palabra ha sido - " + upper + " - y tiene " + counter + " letras.";
}

alert(countAndUpperLetter(word));
resultBox.innerText = countAndUpperLetter(word);
