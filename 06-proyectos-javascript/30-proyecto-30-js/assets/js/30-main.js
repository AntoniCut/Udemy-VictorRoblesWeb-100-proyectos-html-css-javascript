//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-30-js/assets/js/28-main.js  ********** 
//  ************************************************************


/*
   
   ----------  Enunciado Proyecto 30  ----------  

    -  La web debe verse así. Ver PDF.
    -  Cuando la web cargue, debe aumentarse el valor de los followers hasta llegar al objetivo de
       forma “animada”. Ver PDF.

        .socials__item>.fa-instagram {
            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
                                     
*/


window.addEventListener("DOMContentLoaded", () => {  

    //  -----  Referencias al HTML  -----
    const followers = document.querySelectorAll('.socials__number');


    followers.forEach(number => {
        
        const max = parseInt(number.getAttribute("data-target"));
        let actual = 0;  // 🟢 Inicializamos el contador en 0
        const increment = Math.ceil(max / 100);  // 🟢 Ajustamos el incremento
        
        const interval = setInterval(() => {

            if (actual >= max) {
                
                number.innerHTML = max;
                clearInterval(interval);
            
            } else {
                
                actual += increment;
                number.innerHTML = actual;
            }

        }, 20);

    });

});
