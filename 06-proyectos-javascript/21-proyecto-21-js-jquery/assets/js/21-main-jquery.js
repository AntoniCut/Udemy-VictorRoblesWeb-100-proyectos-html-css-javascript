//  **********  /04-curso-100-proyectos-html-css-js  ****************** 
//  **********  /06-proyectos-javascript/  **************************** 
//  **********  /proyecto-21-js/assets/js/21-main-jquery.js  ********** 
//  *******************************************************************


/*
    ----------  Enunciado Proyecto 21  ----------  

    -  Haz una web que se vea así. Ver PDF.
    -  Esta web será un almacén de cajas.
    -  Debemos poder mover las cajas a su hueco correspondiente en el almacén, al soltarlas
       deberán quedarse ahí y quitar su sombra indicando que está ocupada, cuando no haya más
       cajas que mover, se debe mostrar una alerta.
       No puede haber más de 1 caja por hueco.
                                  
*/


$(function () {


    console.warn("Versión de jQuery:", $.fn.jquery);

    if ($.ui)
        console.warn("Versión de jQuery UI:", $.ui.version);
    
    else
        console.warn("jQuery UI no está cargado.");
    

    //  -----  Hacer que las cajas sean arrastrables  -----
    $(".inventario__caja").each(function (index) {
        
        $(this).attr("id", "caja" + (index + 1)); // Asignar ID único
    
    }).draggable({
        revert: "invalid",          //  Vuelve al inventario si no se suelta en una estantería
        containment: ".layout",     //  Mantener dentro del layout
        cursor: "grab"
    });

    
    //  -----  Hacer que las estanterías sean zonas de drop  -----
    $(".almacen__estanteria").droppable({
        
        accept: ".inventario__caja",   // Solo acepta cajas
        hoverClass: "hovered",         // Cambia la apariencia cuando está sobre una estantería
        
        drop: function (event, ui) {
            
            const $caja = ui.draggable;
            const $estanteria = $(this);

            //  -----  Verificar si la estantería está ocupada  -----
            if ($estanteria.children().length === 0) {
                
                //  -----  añadir caja a la estanteria  -----
                $caja.appendTo($estanteria).css({
                    position: "relative",
                    left: 0,
                    top: 0,
                    boxShadow: "none"
                });

                //  -----  Verificar si todas las cajas han sido colocadas  -----
                if ($(".main__inventario").children().length === 0) 
                    alert("😊 ¡Todas las cajas han sido guardadas! 😊");
                
            } else {
                alert("❌ ¡Estantería ocupada! ❌");
                $caja.draggable("option", "revert", true);  // Activa el revert solo si está ocupada
            }
        }

    });

});
