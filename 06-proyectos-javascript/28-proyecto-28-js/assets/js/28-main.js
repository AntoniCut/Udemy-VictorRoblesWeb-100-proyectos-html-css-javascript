//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-28-js/assets/js/28-main.js  ********** 
//  ************************************************************


/*
   ----------  Enunciado Proyecto 28  ----------  

    -  Haremos un efecto de carga muy interesante. Tenemos una web desenfocada. Ver PDF.
    -  Al hacer click al botón debe iniciarse la carga, ocultar el botón y cuando llegue al 100% mostrar
       un texto indicando que la carga ha sido completada, también deberá eliminar el efecto de blur
       poco a poco. Ver PDF.
                                  
*/


window.addEventListener("load", () => {

    //  -----  Referencias al HTML  -----
    const number = document.querySelector('.load__number');
    const btnLoad = document.querySelector('.load__btn');
    const complete = document.querySelector('.load__complete');
    const background = document.querySelector('.main__background');

    //  -----  variables contadoras  -----
    let percent = 1;
    let blur = 30;


    btnLoad.addEventListener('click', () => {
        
        btnLoad.style.display = 'none';

        let interval =  setInterval(() => {
            
            //console.log("intervalo")
            percent++;
            blur -= 30 / 100;

            if(percent > 100) {
                
                clearInterval(interval);
                complete.style.display = 'block';
            
            } else {
                
                number.innerHTML = percent + "%";
                background.style.filter = `blur(${blur}px)`;
            }

        }, 20);

    });
    
    
});
