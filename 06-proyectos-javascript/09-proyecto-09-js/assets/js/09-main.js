//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-09-js/assets/js/09-main.js  ********** 
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
const numbersBox = document.getElementById('numbers');

//  -----  Inicialización de la variable del resultado  -----
let result = 0;


let count = parseInt(prompt('¿Quantos números quieres sumar?', 5));

//  -----  Función que genera números aleatorios  -----
const generateRandomNumbers = (count, min, max) => Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);


//  -----  Función que suma todos los números  -----
const sumAll = (...numbers) => {

    numbersBox.innerHTML = '<br> Los números son: &nbsp; ';

    numbers.forEach((number, index) => {

        if (index === numbers.length - 1)
            numbersBox.innerText += ` ${number}`;

        else
            numbersBox.innerText += ` ${number}, `;

        result += number;

    });

    resultBox.innerHTML = `El resultado es: ${result}`;

}


//  -----  Generar números aleatorios  -----
const randomNumbers = generateRandomNumbers(count, 1, 100);     // 5 números aleatorios entre 1 y 100.


//  -----  Llamar a la función sumAll con los números generados  -----
sumAll(...randomNumbers);
