/*resultado.onkeydown (function(e){
    if(e.keyCode === 13){
        document.calculator.ans.value=eval(document.calculator.ans.value);
    }
})*/
/*
enter.keydown(function(e){
    if(e.keycode === 13){
        document.calculator.ans.value=eval(document.calculator.ans.value);
    }
})

/*var operandoa;
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

    //Eventos de click
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
    punto.onclick = function(e){
        resultado.textContent = resultado.textContent + ".";
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        
        //resetear();
        sumando();
    }
    function sumando(){
        resultado.textContent = "+"
        //resultado.textContent = resultado.textContent + "+";
        //resetear();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;

        operacion = "-";
        restando();
    }
    function restando(){
        resultado.textContent = resultado.textContent + "-";
    }
    division.onclick = function(e){
        //resultado.textContent = resultado.textContent + "/";
        operandoa = resultado.textContent;
        operacion = "/";
        resetear();
    }
    multiplicacion.onclick = function(e){
        //resultado.textContent = resultado.textContent + "*";
        operandoa = resultado.textContent;
        operacion = "*";
        resetear();
    }

    clean.onclick = function(e){
        limpiar();
    }

    enter.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
        /*if(e.key === 'Enter'){
            resolver(e);
        }
    }

    function resetear(){
        resultado.textContent = "";
    }

    function limpiar(){
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }

    function resolver(){
        var res = 0;
        switch(operacion){
            case "+":
                res = parseFloat(operandoa) + parseFloat(operandob);
                break;
            case "-":
                res = parseFloat(operandoa) - parseFloat(operandob);
                break;
            case "*":
                res = parseFloat(operandoa) * parseFloat(operandob);
                break;
            case "/":
                res = parseFloat(operandoa) / parseFloat(operandob);
                break;
        }
        limpiar();
        resultado.textContent = res;
    }
}
*/