//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-07-js/assets/js/04-main.js  ********** 
//  ************************************************************


/*
     ----------  Enunciado Proyecto 8  ----------  

    -  Crea una función que devuelva si un número (enviado por el usuario) es par o impar.
    -  Muestra el Resultado por consola, la pantalla y una ventana.
*/


//  -----  referencias al HTML  -----
const resultado = document.getElementById('resultado');
const h2 = document.createElement('h2');


const esPar = (numero) => {
    return numero % 2 === 0;
};


const renderResultado = (numero, parImpar) => {

    const result = `El número ${numero} es ${parImpar}`;
        console.log(result);
        alert(result);

        h2.innerHTML = result;
        resultado.appendChild(h2);
}


//  -----  introducir número  -----
let numero = parseInt(prompt('Introduce un Número', 0));

//  -----  Verificar si el valor introducido no es un número  -----
if (isNaN(numero)) alert("No has introducido un número válido.");

else {

    if (esPar(numero)) renderResultado(numero, 'par')
    else renderResultado(numero, 'impar')
    
}
