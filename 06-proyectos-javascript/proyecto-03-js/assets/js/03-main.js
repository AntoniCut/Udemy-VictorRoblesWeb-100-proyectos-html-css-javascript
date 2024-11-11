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


let velocidadVehiculo = 135;
const velocidadMaxima = 60;

if (velocidadVehiculo > velocidadMaxima) alert('Baje la Velocidad, vas a' + velocidadVehiculo + ' km/h');
else alert('Velocidad correcta!!!');
