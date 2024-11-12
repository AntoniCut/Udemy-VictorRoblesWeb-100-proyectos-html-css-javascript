//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-07-js/assets/js/04-main.js  ********** 
//  ************************************************************


/*
     ----------  Enunciado Proyecto 4  ----------  

    -  Pidele al usuario su año de nacimiento en una ventana emergente
       y calcula cuántos años tiene actualmente.
    -  Si el año de nacimiento es menor de 1910 volver a pedir el año. 
*/


const fechaActual = new Date();
let fechaNacimiento;
let edadAños, edadMeses, edadDias;
let fechaNac;
const limiteFecha = new Date(
    fechaActual.getFullYear() - 150, 
    fechaActual.getMonth(), 
    fechaActual.getDate() - 1
);


do {
    // Solicitar fecha de nacimiento en formato dd/mm/aa
    fechaNacimiento = prompt("Introduce tu fecha de nacimiento en formato dd/mm/aa:");
    
    // Separar día, mes y año
    const [dia, mes, año] = fechaNacimiento.split('/').map(num => parseInt(num));
    
    // Convertir la fecha ingresada en un objeto Date
    //const añoCompleto = año < 100 ? 2000 + año : año;  // Asumir años en formato corto
    fechaNac = new Date(año, mes - 1, dia);
    
    // Validar que la fecha sea menor a la actual y no exceda el límite de 150 años + 1 día
    if (fechaNac <= fechaActual && fechaNac >= limiteFecha) {
        // Años
        edadAños = fechaActual.getFullYear() - fechaNac.getFullYear();
        // Meses
        edadMeses = fechaActual.getMonth() - fechaNac.getMonth();
        // Días
        edadDias = fechaActual.getDate() - fechaNac.getDate();

        // Ajustar si el mes o día actual es menor que el de nacimiento
        if (edadDias < 0) {
            edadMeses--;
            edadDias += new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate(); // Días del mes anterior
        }

        if (edadMeses < 0) {
            edadAños--;
            edadMeses += 12;
        }
    }
    
} while (fechaNac > fechaActual || fechaNac < limiteFecha || isNaN(edadAños));

// Mostrar la edad en años, meses y días
alert(`Tienes ${edadAños} años, ${edadMeses} meses y ${edadDias} días.`);
