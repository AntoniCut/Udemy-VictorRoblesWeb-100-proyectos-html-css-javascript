//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-04-js/assets/js/04-main.js  ********** 
//  ************************************************************


/*
     ----------  Enunciado Proyecto 4  ----------  

    -  Dado un sueldo, crea un condicional switch comparando su sueldo con diferentes
       tipos de sueldo. Si su sueldo es bueno, malo, etc. 
*/

console.warn('-----  Proyecto 4 JS - main.js  -----');
console.log('\n');

const content = document.querySelector('#content');

let sueldo = parseInt(prompt('¿Cuanto cobras?', 0));

switch (true) {

    case sueldo <= 500:
        content.innerHTML = '<h3> Trabajas a media jornada </h3>';
        break;
    case sueldo <= 1000 && sueldo > 500:
        content.innerHTML = '<h3> Tienes el salario mínimo </h3>';
        break;
    case sueldo <= 1700 && sueldo > 1000:
        content.innerHTML = '<h3> Tienes un sueldo bueno </h3>';
        break;
    case sueldo > 1700:
        content.innerHTML = '<h3> Tienes un sueldo extraordinario </h3>';
        break;
    default:
        content.innerHTML = '<h3> Eres un estudiante, porque no tienes sueldo </h3>';

};
