//  **********  /04-curso-100-proyectos-html-css-js  ************* 
//  **********  /06-proyectos-javascript/  *********************** 
//  **********  /proyecto-04-js/assets/js/04-main-2.js  ********** 
//  **************************************************************


/*
     ----------  Enunciado Proyecto 5  ----------  

    Crea una web con las tablas de multiplicar del 1 al 10. 
    Se debe ver como en el PDF del enunciado: 
 
*/


const tableContainer = document.querySelector('.tables');

// Bucle para crear tablas del 1 al 10
for (let i = 1; i <= 10; i++) {

    // Crear contenedor para cada tabla de multiplicar
    const tableItem = document.createElement('div');
    tableItem.classList.add('tables__item');

    // Crear el título para la tabla
    const tableTitle = document.createElement('h2');
    tableTitle.classList.add('tables__title');
    tableTitle.textContent = `Tabla del ${i}`;
    tableItem.appendChild(tableTitle);

    // Crear lista de elementos (operaciones de la tabla)
    const tableList = document.createElement('ul');
    tableList.classList.add('tables__list', `tables__list--${i}`);

    // Añadir cada operación de la tabla como un elemento de lista
    for (let n = 1; n <= 10; n++) {
        const result = i * n;

        // Crear elemento de lista para cada operación
        const listItem = document.createElement('li');
        listItem.classList.add('list__item');
        listItem.textContent = `${i} X ${n} = ${result}`;

        // Añadir operación a la lista
        tableList.appendChild(listItem);
    }

    // Añadir la lista completa al contenedor de la tabla
    tableItem.appendChild(tableList);

    // Añadir el contenedor de la tabla al contenedor principal
    tableContainer.appendChild(tableItem);

    // Añadir <hr> después de la quinta tabla y la última tabla
    if (i === 5 || i === 10) {
        const separator = document.createElement('hr'); // Crear <hr> de separación
        separator.classList.add('separator');
        tableContainer.appendChild(separator);
    }
}
