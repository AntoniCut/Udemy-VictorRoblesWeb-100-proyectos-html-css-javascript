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
const h2 = document.createElement('h2');

const numbersBox = document.getElementById('numbers');
const p = document.createElement('p');

//  -----  Inicialización de la variable del resultado  -----
let result = 0;


//  -----  Función que genera números aleatorios  -----
const generateRandomNumbers = (count, min, max) => Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min);


//  -----  Función que suma todos los números  -----
const sumAll = (...numbers) => {
    
    p.innerHTML = '<br>Los números son...';
    
    numbers.forEach((number, index) => {
        
        if (index === numbers.length - 1) p.innerText += `${number}`;
        else p.innerText += `${number}, `;
        result += number;
    });

    h2.innerHTML = `El resultado es: ${result} <br><br>`;
    resultBox.appendChild(h2);
    numbersBox.appendChild(p);
}


//  -----  Generar números aleatorios  -----
const randomNumbers = generateRandomNumbers(5, 1, 100);     // 5 números aleatorios entre 1 y 100.


//  -----  Llamar a la función sumAll con los números generados  -----
sumAll(...randomNumbers);
