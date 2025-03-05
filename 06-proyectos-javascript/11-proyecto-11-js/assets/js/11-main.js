//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-11-js/assets/js/10-main.js  ********** 
//  ************************************************************


/*
    ----------  Enunciado Proyecto 11  ----------  

    -  Dada una frase, crear una función que reemplace una palabra en ella,
       la palabra a buscar y la de reemplazo deben ser solicitadas al usuario.
*/


//  -----  Referencias al HTML  -----
const resultBox = document.getElementById('result');


//  -----  Solicitar datos al usuario  -----
const frase = prompt('Introduce una frase:');
const palabra = prompt(`En esta frase - "${frase}" - ¿qué palabra quieres reemplazar?`);
const reemplazo = prompt(`Has elegido la palabra - "${palabra}" - ¿por qué palabra la quieres sustituir?`);

let fraseFinal = frase;


//  -----  Función para reemplazar la palabra en la frase  -----
const reemplazar = (frase, palabra, reemplazo) => {
    
    //  -----  Verifica si la palabra está en la frase  -----
    if (frase.includes(palabra)) 
        return frase.replace(palabra, reemplazo);
    
    else 
        return 'Esa palabra no existe en la frase.';
};


//  -----  Mostrar el resultado en un `alert` y en el HTML  -----
fraseFinal = reemplazar(frase, palabra, reemplazo);
alert(fraseFinal);


//  -----  Mostrar el resultado en el DOM  -----
resultBox.innerHTML += `

    La frase es: <h3> ${frase} </h3>
    La palabra a buscar es: <h3> ${palabra} </h3>
    La palabra a reemplazar es: <h3> ${reemplazo} </h3>
    La nueva frase es: <h3> ${fraseFinal} </h3>

`;
