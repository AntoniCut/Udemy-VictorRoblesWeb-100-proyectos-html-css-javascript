//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-23-js/assets/js/22-main.js  ********** 
//  ************************************************************


/*
     ----------  Enunciado Proyecto 23  ----------  

    -  Necesitamos hacer un validador de emails.
       Si el email es correcto mostrara un check y si es incorrecto una cruz. Ver PDF.
    -  Expresión regular validar email mas robusta:
        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                  
*/


window.addEventListener("DOMContentLoaded", () => {

    //  -----  Referencias al HTML  -----
    const input = document.querySelector(".main__input");
    const main = document.querySelector(".layout__main");
    const check = document.querySelector(".icons__check");
    const xMark = document.querySelector(".icons__xmark");
    

    input.addEventListener('focus', () => {

        main.classList.add('focus');
    });


    input.addEventListener('blur', () => {

        main.classList.remove('focus');
    });


    input.addEventListener('keydown', () => validate());


    const validate = () => {

        //let pattern = /@.*\./;
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = input.value;

        if (email.trim() != "") {

            let test = pattern.test(email);
            console.log(test);
            
            if(test) {
                check.classList.add('show');;
                xMark.classList.remove('show');
            }

            else{
                check.classList.remove('show');;
                xMark.classList.add('show');
            }
                 
        }
    }

    
});
