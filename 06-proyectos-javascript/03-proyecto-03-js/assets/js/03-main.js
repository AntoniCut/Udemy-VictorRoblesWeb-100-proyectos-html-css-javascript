//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-03-js/assets/js/03-main.js  ********** 
//  ************************************************************


/*
     ----------  Enunciado Proyecto 3  ----------  

    -  Un coche va a toda velocidad por la carretera. 
       Va a una velocidad de 135 km/h y el limite es de 60 km/h. 
       Debes comprobar que:

        -  Si la velocidad es Mayor al limite debes de mostrar
           un mensaje por la consola indicando que baje la velocidad.
        -  Si la velocidad es Menor al limite debes de mostrar
           un mensaje por la consola indicando que todo va bien.
*/

console.warn('-----  Proyecto 3 JS - main.js  -----');
console.log('\n');


const content = document.querySelector('.content');

let velocidadVehiculo = parseInt(prompt('¿ A que velocidad vas?' , 50));
const velocidadMaxima = 60;

if (velocidadVehiculo > velocidadMaxima) {
    alert('Baje la Velocidad, vas a' + velocidadVehiculo + ' km/h');
    content.innerHTML = `<h3> Baje la velocidad, vas a ${velocidadVehiculo} km/h </h3>`;
}

else {
    alert('Velocidad correcta!!!');
    content.innerHTML = `<h3> Velocidad correcta!!! </h3>`;
} 
