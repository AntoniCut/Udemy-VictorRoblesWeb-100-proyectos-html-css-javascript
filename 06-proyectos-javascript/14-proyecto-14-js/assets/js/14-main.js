//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-14-js/assets/js/13-main.js  ********** 
//  ************************************************************


/*
    ----------  Enunciado Proyecto 14  ----------  

    -  Un usuario nos dira su sueldo.
    -  Necesito saber que sueldos son iguales o mayores al suyo en la empresa.
    -  Crea un programa que dado un array de sueldos, busque los sueldo mayores o iguales
       a uno dado por el usuario.
    -  Cuando lo encuentre, ordenar los resultados de forma ascendente y mostrarlos por la consola.
*/


//  -----  Referencias al HTML  -----
const cajaContent = document.querySelector('#content');

//  -----  Sueldos de empleados  -----
const sueldos = [1050, 640, 750, 1500, 2200, 3011, 432];

const sueldoUsuario = parseInt(prompt('¿Cuál es tu sueldo?'));


//  -----  Función para buscar sueldos iguales o mayores -----
function buscarSueldos(salarios, miSueldo) {
    
    //  -----  Validar si el sueldo ingresado es un número válido  -----
    if (isNaN(miSueldo)) {
        cajaContent.innerHTML = `<h2>Por favor, ingresa un número válido.</h2>`;
        return;
    }

    //  ----- Filtrar sueldos mayores o iguales al del usuario  -----
    const busquedas = salarios.filter(salario => salario >= miSueldo);

    //  -----  Ordenar los resultados en orden ascendente  -----
    const ordenar = busquedas.sort((a, b) => a - b);

    //  -----  Mostrar en el DOM los sueldos encontrados  -----
    cajaContent.innerHTML = `
        <h2> Salarios iguales o mayores a ${miSueldo}: </h2>
        <p> ${ ordenar.length > 0 ? ordenar.join(', ') : "No hay sueldos mayores o iguales al tuyo." } </p>
    `;
}

// Ejecutar la función
buscarSueldos(sueldos, sueldoUsuario);
