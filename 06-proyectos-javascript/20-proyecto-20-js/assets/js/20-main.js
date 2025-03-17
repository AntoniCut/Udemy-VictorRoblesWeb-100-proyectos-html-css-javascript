//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-20-js/assets/js/20-main.js  ********** 
//  ************************************************************


/*
    ----------  Enunciado Proyecto 20  ----------  

    Crea una web que muestre la fecha y la hora actual, debe actualizarse sola sin refrescar la
    pantalla y debe verse así. Ver PDF.

*/


window.addEventListener("DOMContentLoaded", () => {


    //  -----  Referencias al HTML  -----
    const dateDom = document.querySelector(".main__date");
    const hourDom = document.querySelector(".main__hour");


    const myDate = () => {

        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let secons = date.getSeconds();

        console.log('day', day, ' - month', month, ' - year', year);
        console.log('hour', hour, ' - minutes', minutes, ' - secons', secons);

        if (day < 10)
            day = `0${day}`;
        
        if (month < 10)
            month = `0${month}`;

        if (hour < 10)
            hour = `0${hour}`;
        
        if (minutes < 10)
            minutes = `0${minutes}`;

        if (secons < 10)
            secons = `0${secons}`;
        
        dateDom.innerHTML = `${day}/${month}/${year}`;
        hourDom.innerHTML = `${hour}:${minutes}:${secons}`;

    }


    setInterval(() => {
        myDate();
    }, 1000);


});
