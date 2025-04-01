//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-29-js/assets/js/28-main.js  ********** 
//  ************************************************************


/*
   ----------  Enunciado Proyecto 29  ----------  

    -  La web debe verse así. Ver PDF.
    -  Cuando estemos posicionados dentro de un input el label deberá salir fuera de esta forma. Ver PDF.
    -  En el caso de que no haya texto deberá volver a su ubicación original.
                                  
*/


window.addEventListener("load", () => {

    //  -----  Referencias al HTML  -----
    const formControl = document.querySelectorAll('.form__control');


    formControl.forEach(formControl => {

        const label = formControl.firstElementChild;
        const input = formControl.lastElementChild;

        console.log('\n');
        console.log('label', label);
        console.log('input', input);

        input.addEventListener('focus', () => {
            label.classList.remove('blur');
            label.classList.add('focus');
        });

        input.addEventListener('blur', () => {
            
            if (input.value.trim() === "") {
                label.classList.remove('focus');
                label.classList.add('blur');
            }

        });

    });

});
