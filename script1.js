$(document).ready(function(){

    $("h3").hover(function(){
        $("h3").addClass( "h3_color");   
    });

    $("#Herzeleid").hover(function(){
        $("#Sehnsucht").removeClass("p_color");
        $("#Mutter").removeClass("p_color");
        $("#ReiseReise").removeClass("p_color");
        $("#Rosenrot").removeClass("p_color");
        $("#LIFAD").removeClass("p_color");
        $("#Herzeleid").addClass("p_color");

    });

    $("#Mutter").hover(function(){
        $("#Sehnsucht").removeClass("p_color");
        $("#Herzeleid").removeClass("p_color");
        $("#ReiseReise").removeClass("p_color");
        $("#Rosenrot").removeClass("p_color");
        $("#LIFAD").removeClass("p_color");
        $("#Mutter").addClass("p_color");
    });

    $("#Sehnsucht").hover(function(){
        $("#Herzeleid").removeClass("p_color");
        $("#Mutter").removeClass("p_color");
        $("#ReiseReise").removeClass("p_color");
        $("#Rosenrot").removeClass("p_color");
        $("#LIFAD").removeClass("p_color");
        $("#Sehnsucht").addClass("p_color");
    });

    $("#ReiseReise").hover(function(){
        $("#Sehnsucht").removeClass("p_color");
        $("#Herzeleid").removeClass("p_color");
        $("#Mutter").removeClass("p_color");
        $("#Rosenrot").removeClass("p_color");
        $("#LIFAD").removeClass("p_color");
        $("#ReiseReise").addClass("p_color");
    });

    $("#Rosenrot").hover(function(){
        $("#Sehnsucht").removeClass("p_color");
        $("#Herzeleid").removeClass("p_color");
        $("#ReiseReise").removeClass("p_color");
        $("#Mutter").removeClass("p_color");
        $("#LIFAD").removeClass("p_color");
        $("#Rosenrot").addClass("p_color");
    });

    $("#LIFAD").hover(function(){
        $("#Sehnsucht").removeClass("p_color");
        $("#Herzeleid").removeClass("p_color");
        $("#ReiseReise").removeClass("p_color");
        $("#Rosenrot").removeClass("p_color");
        $("#Mutter").removeClass("p_color");
        $("#LIFAD").addClass("p_color");
    });
});