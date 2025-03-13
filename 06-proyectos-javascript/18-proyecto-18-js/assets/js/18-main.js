//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-18-js/assets/js/18-main.js  ********** 
//  ************************************************************


/*
    ----------  Enunciado Proyecto 18  ----------  

    -  Antes de empezar con JS, deberás tener una web con estos estilos.
    -  Crea un fichero JavaScript y vincúlalo con tu fichero HTML, con JS deberás hacer que el
       cronometro empiece a contar al pulsar el botón de iniciar, el cronometro se parara cuando
       llegue a 60 minutos o el usuario pulse el botón parar, al pararse podrá volver a iniciarse
       pulsando el mismo botón. Ver PDF.
*/


window.addEventListener("DOMContentLoaded", () => {


    //  -----  Referencias al HTML  --  minutos y segundos  -----
    const cronoMin = document.querySelector(".crono__min");
    const cronoSec = document.querySelector(".crono__sec");

    //  -----  Referencias al HTML  --  seleccion botones  -----
    const btnStart = document.querySelector('.layout__btn-start');
    const btnStop = document.querySelector('.layout__btn-stop');


    //  -----  Variables cuenta minutos y segundos  -----
    let minutes = 59;
    let secons = 45;
    let time = null;


    //  -----  Función para iniciar cronómetro  -----
    const start = () => {


        //  -----  inicializamos estilos  -----
        btnStart.style.opacity = 0.5;
        btnStop.style.backgroundColor = 'rgb(17, 14, 14)';
        btnStop.classList.remove('active-hover');
        btnStop.classList.add('disabled-hover');

        console.log('time', time);

        if (!time) {

            time = setInterval(() => {

                secons++;

                if (secons === 60) {
                    minutes++;
                    secons = 0;
                }

                if (secons < 10)
                    cronoSec.innerHTML = "0" + secons;
                else
                    cronoSec.innerHTML = secons;

                if (minutes < 10)
                    cronoMin.innerHTML = "0" + minutes;
                else
                    cronoMin.innerHTML = minutes;

                console.log("minutes:", minutes, " secons:", secons);

                if (minutes >= 60) {
                    alert("Has excedido el tiempo limite de 60 minutos");
                    stop();
                    clearInterval(time);
                    console.log('time', time);
                    initCrono();
                }

            }, 1000);
        }

    }


    //  -----  Función para parar cronómetro  -----
    const stop = () => {

        //  -----  inicializamos estilos  -----
        btnStart.style.opacity = 1;
        btnStop.style.backgroundColor = '#cccccc';
        btnStop.classList.add('active-hover');
        
        if (time) {
            clearInterval(time);
            time = null;
        }
    }


    //  -----  Función para resetear el cronómetro  -----
    const initCrono = () => {

        //  -----  inicializamos estilos  -----
        btnStop.classList.remove('disabled-hover');
                
        //  -----  reseteamos variables y DOM  -----
        secons = 0;
        minutes = 0;

        cronoSec.innerHTML = "00";
        cronoMin.innerHTML = "00";
    }


    //  -----  Botón Iniciar  -----
    btnStart.addEventListener('click', () => {
        start();
    });


    //  -----  Botón Stop  -----
    btnStop.addEventListener('click', () => {
        stop();
    });


});
