$(document).ready(function () {
    //MouseOver - MouseOut
    
    var caja = $("#caja") ;
    /*
 
    caja.mouseover(function(){
        $(this).css("background","red");
    });

    caja.mouseout(function(){
        $(this).css("background","green");
    });
    */


    function cambiaRojo() {
        $(this).css("background", "red");
    }

    function cambiaVerde() {
        $(this).css("background", "green");
    }

    //Hover
    caja.hover(cambiaRojo,cambiaVerde);

    //Evento click, Doble click
    caja.click(function(){
        $(this).css("background","blue").css("color","white");
    });

    //doble click
    caja.dblclick(function(){
        $(this).css("background","pink").css("color","yellow");
    });

    //Focus y blur
    var nombre = $("#nombre");
    var datos =  $("#datos");

    nombre.focus(function(){
        $(this).css("border", "2px solid green");
    });

    nombre.blur(function(){
        $(this).css("border", "1px solid #ccc");
        
       datos.text($(this).val()).show();
    });

    //MOUSEDOWN y MOUSEUP
    datos.mousedown(function () { 
        $(this).css("border-color", "gray");
    });

    datos.mouseout(function () { 
        $(this).css("border-color", "black");
    });

    // Mousemove
    $(document).mousemove(function (e) { 
        console.log(event.clientX);
        console.log(event.clientY);
        $("#sigueme").css("left",event.clientX).css("top",event.clientY);
    });

});