//  **********  /04-curso-100-proyectos-html-css-js/  ***********
//  **********  /02-repaso-desarrollo-web/  *********************
//  **********  /05-repaso-javascript-moderno/main.js  **********


//alert('Repaso de JavaScript Moderno');

//  -----  variables  -----
let nombre1 = 'Antonio Cutillas';
const pi = 3.1416;
console.log(nombre1, pi);

let nombre2 = 'Victor';
let apellidos2 = 'Robles';
console.log(nombre2, pi);


//  -----  concatenación  -----
let concatenación = nombre2 + " " + apellidos2;
console.log(concatenación);


//  -----  Seleccionar elementos del DOM  -----
const datos = document.querySelector('#datos');
datos.innerHTML = `

    <h1> Soy la caja de datos </h1>
    <hr>
    <p> el numero PI es: ${pi} </p>
`;


//  -----  Condiciones  -----
let altura = parseInt(prompt('¿Cual es tu Altura en cm?', 180));
if (altura >= 190) datos.innerHTML += '<h1> Eres una persona alta </h1> <hr>'
else datos.innerHTML += '<h1> Eres una persona baja </h1> <hr>'


//  -----  Bucles  ------
for (let year = 2000; year <= 2023; year++) {

    if (year === 2023) datos.innerHTML += `${year} <hr>`;
    else datos.innerHTML += `${year}, `
}


//  -----  Arrays  -----
const nombres = ['Antonio', 'Victor', 'Pepe']
const divNombres = document.getElementById('nombres');
divNombres.innerHTML = nombres[0];

divNombres.innerHTML += '<h1> Listado de Nombres con foreach...</h1>';
divNombres.innerHTML += '<ul>';
nombres.forEach(nombre => divNombres.innerHTML += `<li> ${nombre} </li>`);
divNombres.innerHTML += '</ul>';


divNombres.innerHTML += '<h1> Listado de Nombres con forof...</h1>';
divNombres.innerHTML += '<ul>';
for (let nombre of nombres) divNombres.innerHTML += `<li> ${nombre} </li>`
divNombres.innerHTML += '</ul> <hr>';


//  -----  funciones  -----
const miInformacion = (nombre, altura) => {

    let misDatos = `

        <h1> Mis Datos </h1>
        <p> Mi nombre es ${nombre} y mi altura es ${altura} </p>
    `;

    return misDatos;
}

let miNombre = prompt('¿Cual es tu nombre?');
let miAltura = parseInt(prompt('¿Cual es tu Altura en cm?', 180));

const imprimirDatos = () => {
    
    const misDatos = document.getElementById('misDatos');
    misDatos.innerHTML = miInformacion(miNombre, miAltura)
}

imprimirDatos();
