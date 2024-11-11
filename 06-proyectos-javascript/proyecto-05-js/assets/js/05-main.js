//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-04-js/assets/js/04-main.js  ********** 
//  ************************************************************


/*
     ----------  Enunciado Proyecto 5  ----------  

    Crea una web con las tablas de multiplicar del 1 al 10. 
    Se debe ver como en el PDF del enunciado: 
 
*/


const tableContainer = document.querySelector('.tables');
let result = 0;


//  -----  bucle para sacar el numero de la tabla  -----
for (let i = 1; i <= 10; i++) {

    //  -----  Plantilla para mostrar encabezado  --------  
    //  -----  y crear caja operaciones de la tabla  -----
    tableContainer.innerHTML += `
    
        <div class='tables__item'>
            
            <h2 class='tables__title'> Tabla del ${i} </h2>
            
            <ul class='tables__list tables__list--${i}'> </ul>

        </div>
    `;

    //  -----  bucle para sacar numeros para las operaciones de la tabla  -----
    for (let n = 1; n <= 10; n++) {

        //  -----  calcular resultado de la operación  -----
        result = i * n;

        //  -----  sacar caja donde mostrar operaciones  -----
        const lists = document.querySelector('.tables__list--' + i);
        
        //lists.innerHTML += ` <li class='tables__item'> ${i + ' X ' + n + ' = ' + result} </li> `;
        lists.innerHTML += `<li class='list__item'>${i} X ${n} = ${result}</li>`;
    }

    // Añadir <hr> después de la quinta tabla
    if (i === 5 || i === 10) {
        const separator = document.createElement('div'); // Crear un nuevo <hr> cada vez
        separator.classList.add('separator');
        tableContainer.appendChild(separator);
    }
}
