//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-31-js/assets/js/28-main.js  ********** 
//  ************************************************************


/*
   ----------  Enunciado Proyecto 31  ----------  

    -  La web debe verse así. Ver PDF.
    -  Al hacer click al botón de siguiente la barra de progreso debe aumentar hasta el siguiente
       punto de esta forma. Ver PDF.
    -  Si le damos a anterior deberá retroceder y quedar como la primera imagen. Ver PDF.
                                     
*/


document.addEventListener("DOMContentLoaded", () => {  


    //  -----  Referencias al HTML  -----
    
    const btnPrev = document.querySelector('.btns__prev');
    const btnNext = document.querySelector('.btns__next');

    const stepsBar = document.querySelector('.steps__bar');
    const stepCircle = document.querySelectorAll('.steps__step');


    let progress = 0;  //  Altura barra progreso.
    let counter = 1;   //  Contador de pasos.

    btnNext.addEventListener('click', () => {

        counter++;
        progress += 25;
        
        if(counter > stepCircle.length) {
            counter = stepCircle.length;
            progress = 100;
        }
            
        stepsBar.style.height = progress + "%";

        //  -----  desabilitar botones y activar bordes  -----
        disableBtns(progress);
        borderActive();

    });



    btnPrev.addEventListener('click', () => {

        counter--;
        progress -= 25;
        
        if(counter < 1) {
            counter = 1;
            progress = 0;
        }
            
        stepsBar.style.height = progress + "%";

        //  -----  desabilitar botones y activar bordes  -----
        disableBtns(progress);
        borderActive();

    });


    const disableBtns = (progress) => {

        if(progress >= 100) {
            
            btnNext.setAttribute("disabled", "true");
            btnNext.classList.add("disable");

        } else {

            btnNext.removeAttribute("disabled");
            btnNext.classList.remove("disable");
        }

        if(progress <= 0) {
            
            btnPrev.setAttribute("disabled", "true");
            btnPrev.classList.add("disable");

        } else {

            btnPrev.removeAttribute("disabled");
            btnPrev.classList.remove("disable");
        }

    }


    const borderActive = () => {

        stepCircle.forEach( (step, index) => {

            if(counter > index) {
                
                step.classList.add("active");
                step.lastElementChild.style.opacity = 1;
            }

            else {
                step.classList.remove("active");
                step.lastElementChild.style.opacity = 0;
            }

        });

    }
   

});
