
function compruebaDia(){ // con esta funcion comprobamos que el usuario introduzca el primer dia del mes
    var C= new Date (document.getElementById("fecha").value);
    var dia= C.getDate();

    if (dia>1){
        alert("El día ha de ser el primero de cada mes. Introduce un día valido!");
        
    } else{
        calculo(); 
    }
}
function calculo (){// asi calculamos la cuota mensual de la hipoteca
var precio = parseFloat(document.getElementById("capital").value);
var intereses= parseFloat( document.getElementById("interes").value/12);
var plazos= parseInt(document.getElementById("plazo").value);
var cuota;
var A= precio*intereses;
var B= 100* (1- Math.pow(1+ (intereses/100), -plazos));

cuota= A/B ;
alert("la cuota de tu hipoteca es de: "+ cuota.toFixed(2));

}

