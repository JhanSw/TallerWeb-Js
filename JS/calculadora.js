var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById("resultado");
    var clean = document.getElementById("clean");
    var division = document.getElementById("division");
    var multiplicacion = document.getElementById("multiplicacion");
    var resta = document.getElementById("resta");
    var suma = document.getElementById("suma");
    var enter = document.getElementById("enter");
    var nueve = document.getElementById("nueve");
    var ocho = document.getElementById("ocho");
    var siete = document.getElementById("siete");
    var seis = document.getElementById("seis");
    var cinco = document.getElementById("cinco");
    var cuatro = document.getElementById("cuatro");
    var tres = document.getElementById("tres");
    var dos = document.getElementById("dos");
    var uno = document.getElementById("uno");
    var cero = document.getElementById("cero");
    var punto = document.getElementById("punto");

    //Eventos
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    suma.onclick = function(e){
        resultado.textContent = resultado.textContent + "+";
        operandoa = resultado.textContent;
        operacion = "+";
        //clean();
    }
    resta.onclick = function(e){
        resultado.textContent = resultado.textContent + "-";
        operandoa = resultado.textContent;
        operacion = "-";
        //clean();
    }
    division.onclick = function(e){
        resultado.textContent = resultado.textContent + "/";
        operandoa = resultado.textContent;
        operacion = "/";
        //clean();
    }
    multiplicacion.onclick = function(e){
        resultado.textContent = resultado.textContent + "*";
        operandoa = resultado.textContent;
        operacion = "*";
        //clean();
    }

    //Mas eventos
    clean.onclick = function(e){
        clean();
    }

}
