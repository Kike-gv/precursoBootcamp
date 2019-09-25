var number;
var calcScreen=0;
var operation;
var memory = 0;
var stored = 0;
var reset = 0;

function keypressed(key){
    var keyValue = document.getElementById(key).innerHTML;

    keySaving(keyValue);

    return keyValue;
};

function keySaving(keyValue){
    switch (keyValue){
        case "0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":
            calcScreen += keyValue;
            document.getElementById("calcScreen").innerHTML = calcScreen;
            number = parseInt(calcScreen);
            break;
        case "R":
            number = 0;
            calcScreen = 0;
            operation = 0;
            memory = 0;

            document.getElementById("calcScreen").innerHTML = calcScreen;
            reset++;
            if (reset === 2){
                stored = 0;
                reset = 0;
            }
            break;
        case "+":
            calcScreen = keyValue;
            operation = keyValue;
            document.getElementById("calcScreen").innerHTML = calcScreen;
            break;
        case "-":
            calcScreen = keyValue;
            operation = keyValue;
            document.getElementById("calcScreen").innerHTML = calcScreen;
            break;
        case "X":
            calcScreen = keyValue;
            operation = keyValue;
            document.getElementById("calcScreen").innerHTML = calcScreen;
            break;
        case "%":
            calcScreen = keyValue;
            operation = keyValue;
            document.getElementById("calcScreen").innerHTML = calcScreen;
            break;
        case "=":
            calcScreen = keyValue;
            document.getElementById("calcScreen").innerHTML = calcScreen;
            break;
        case "AC":
            operation = keyValue;
            break;
        default:
            console.log("error,no entro");
            break;
    }
    console.log(keyValue);
    return keyValue;
};

function add(storedV,numberV){
    return storedV + numberV;
};
function less(storedV,numberV){
    return storedV - numberV;
};
function mult(storedV,numberV){
    return storedV * numberV;
};
function divis(storedV,numberV){
    return storedV / numberV;
};