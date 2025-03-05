//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-12-js/assets/js/10-main.js  ********** 
//  ************************************************************


/*
    ----------  Enunciado Proyecto 12  ----------  

    -  Crea una función que recorra y muestre por pantalla en parrafos
       un array de animales.
*/


//  -----  Referencias al HTML  -----
const resultBox = document.getElementById('result');

//  -----  Array de animales -----
const animales = [];

do {
    const animal = prompt('Introduce un animal', 'gato');

    //  -----  Si el usuario cancela o deja vacío, salir del bucle  -----
    if (!animal) break; 

    animales.push(animal);

} while (animales);


//  -----  Función para recorrer y mostrar los animales -----
const recorrerMostrar = animales => animales.forEach( animal => resultBox.innerHTML += `<p>${animal}</p>` );


//  -----  Llamar a la función -----
recorrerMostrar(animales);
