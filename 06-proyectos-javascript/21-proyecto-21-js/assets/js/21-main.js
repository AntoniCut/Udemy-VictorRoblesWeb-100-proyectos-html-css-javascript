//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-21-js/assets/js/21-main.js  ********** 
//  ************************************************************


/*
    ----------  Enunciado Proyecto 21  ----------  

    -  Haz una web que se vea así. Ver PDF.
    -  Esta web será un almacén de cajas.
    -  Debemos poder mover las cajas a su hueco correspondiente en el almacén, al soltarlas
       deberán quedarse ahí y quitar su sombra indicando que está ocupada, cuando no haya más
       cajas que mover, se debe mostrar una alerta.
       No puede haber más de 1 caja por hueco.
                                  
*/


window.addEventListener("DOMContentLoaded", () => {

    //  -----  Referencias al HTML  -----
    const inventarioDom = document.querySelector(".main__inventario");
    const cajas = document.querySelectorAll(".inventario__caja");
    const estanteriaDom = document.querySelectorAll(".almacen__estanteria");

    console.log('inventarioDom', inventarioDom);
    console.log('cajas', cajas);
    console.log('estanteriaDom', estanteriaDom);


    //  -----  poner un id único a cada caja movible  -----
    cajas.forEach((caja, i) => {
        caja.setAttribute("id", "caja" + (i + 1));

        caja.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("id", e.target.id);
        });
    });


    //  -----  establecer cada hueco de la estanteria como un hueco  -----
    //  -----  donde puedo soltar un elemento  ----------------------------
    estanteriaDom.forEach((estanteria) => {

        
        //  -----  desactivar el dragover  -----
        estanteria.addEventListener("dragover", (e) => {
            e.preventDefault();
        });


        //  -----  al soltar la caja en la almacen estanteria  -----
        estanteria.addEventListener("drop", (e) => {
            
            e.preventDefault();

            const cajaId = e.dataTransfer.getData("id");
            console.log(cajaId);

            if (cajaId) {
                
                const caja = document.querySelector("#" + cajaId);
                console.log("Elemento de la caja:", caja);

                //  -----  Verificar si la estantería ya tiene una caja dentro  -----
                if (e.currentTarget.children.length === 0) {  
                    e.currentTarget.appendChild(caja);
                    caja.style.boxShadow = "none";
                
                } else
                    alert("❌ ¡Estantería ocupada! ❌");
                
                //  -----  alerta si todas las cajas han sido guardadas  -----
                if (inventarioDom.children.length === 0) {
                    alert("😊 ¡Todas las cajas han sido guardadas! 😊");
                }
            }
            
        });

    });

});
