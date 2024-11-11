//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-04-js/assets/js/04-main.js  ********** 
//  ************************************************************


/*
     ----------  Enunciado Proyecto 4  ----------  

    -  Dado un sueldo, crea un condicional switch comparando su sueldo con diferentes
       tipos de sueldo. Si su sueldo es bueno, malo, etc. 
*/


const resultado = document.getElementById('resultado');
let sueldo = parseInt(prompt('¿Cuanto cobras?', 0));

switch (true) {

    case sueldo <= 500:
        resultado.innerHTML = 'Trabajas a media jornada';
        break;
    case sueldo <= 1000 && sueldo > 500:
        resultado.innerHTML = 'Tienes el salario mínimo';
        break;
    case sueldo <= 1700 && sueldo > 1000:
        resultado.innerHTML = 'Tienes un sueldo bueno';
        break;
    case sueldo > 1700:
        resultado.innerHTML = 'Tienes un sueldo extraordinario'
        break;
    default:
        resultado.innerHTML = 'Eres un estudiante, porque no tienes sueldo'

};
