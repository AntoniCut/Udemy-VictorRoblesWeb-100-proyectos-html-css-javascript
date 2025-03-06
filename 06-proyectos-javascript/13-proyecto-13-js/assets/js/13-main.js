//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-13-js/assets/js/13-main.js  ********** 
//  ************************************************************


/*
    ----------  Enunciado Proyecto 13  ----------  

    -  Un concesionario tiene 3 marcas de coches y 3 modelos distintos por cada
       marca (array multidimensional).
    -  Crear una funcion que muestre (encabezado y Lista).
*/


//  -----  Referencias al HTML  -----
const cajaConcesionario = document.querySelector('#concesionario');


//  -----  Datos del Concesionario  -----
const concesionario = [
    
    {
        marca: "Mercedes",
        modelos: ["clase A", "clase B", "clase C"]
    },

    {
        marca: "Audi",
        modelos: ["A4", "A3", "Q3"]
    },

    {
        marca: "Renault",
        modelos: ["Clio", "Megane", "Capture"]
    }
];


//  -----  Mostrar los datos en el DOM  -----
function mostrar(datos) {
       
    //  -----  recorrer concesionario  -----
    datos.forEach( coches => {
        
        console.log('coches', coches);
        console.log('marca', coches.marca);
        
        //  -----  añadir marca en el DOM  -----
        cajaConcesionario.innerHTML += ` <h2> ${coches.marca} </h2>`;

        //  -----  crear lista para las caracteristicas de cada marca  -----
        cajaConcesionario.innerHTML += `<ul>`;

        //  -----  recorrer cada modelo  -----
        const modelos = coches.modelos;

        modelos.forEach( modelo => {
            console.log('modelos', coches.modelos);
            cajaConcesionario.innerHTML += `<li> modelo ${modelo} </li>`
        });

        cajaConcesionario.innerHTML += `</ul>`;




    })

    

}


mostrar(concesionario)
