let Total = 0;
let finalAction = "";
let number1 = 0;
let number2 = 0;

function seven() {
    let Num = document.getElementById("txtNum").value;
    if (Num == "") {
        document.getElementById("txtNum").value = "7";
    }
    else {
        document.getElementById("txtNum").value = Num + "7";
    }
}

function eight() {
    let Num = document.getElementById("txtNum").value;
    if (Num == "") {
        document.getElementById("txtNum").value = "8";
    }
    else {
        document.getElementById("txtNum").value = Num + "8";
    }
}

function nine() {
    let Num = document.getElementById("txtNum").value;
    if (Num == "") {
        document.getElementById("txtNum").value = "9";
    }
    else {
        document.getElementById("txtNum").value = Num + "9";
    }
}

function fore() {
    let Num = document.getElementById("txtNum").value;
    if (Num == "") {
        document.getElementById("txtNum").value = "4";
    }
    else {
        document.getElementById("txtNum").value = Num + "4";
    }
}

function five() {
    let Num = document.getElementById("txtNum").value;
    if (Num == "") {
        document.getElementById("txtNum").value = "5";
    }
    else {
        document.getElementById("txtNum").value = Num + "5";
    }
}

function six() {
    let Num = document.getElementById("txtNum").value;
    if (Num == "") {
        document.getElementById("txtNum").value = "6";
    }
    else {
        document.getElementById("txtNum").value = Num + "6";
    }
}

function one() {
    let Num = document.getElementById("txtNum").value;
    if (Num == "") {
        document.getElementById("txtNum").value = "1";
    }
    else {
        document.getElementById("txtNum").value = Num + "1";
    }
}

function two() {
    let Num = document.getElementById("txtNum").value;
    if (Num == "") {
        document.getElementById("txtNum").value = "2";
    }
    else {
        document.getElementById("txtNum").value = Num + "2";
    }
}

function three() {
    let Num = document.getElementById("txtNum").value;
    if (Num == "") {
        document.getElementById("txtNum").value = "3";
    }
    else {
        document.getElementById("txtNum").value = Num + "3";
    }
}

function zero() {
    let Num = document.getElementById("txtNum").value;
    if (Num == "") {
        document.getElementById("txtNum").value = "0";
    }
    else {
        document.getElementById("txtNum").value = Num + "0";
    }
}

function dote() {
    let Num = document.getElementById("txtNum").value;
    if (Num == "") {
        document.getElementById("txtNum").value = ".";
    }
    else {
        document.getElementById("txtNum").value = Num + ".";
    }
}

function Clear() {
    document.getElementById("txtNum").value = "";
    number1 = 0;
    number2 = 0;
}

function Addition() {
    if (number1 == 0) {
        number1 = Number(document.getElementById("txtNum").value);
    }
    else if (number2 == 0) {
        number2 = Number(document.getElementById("txtNum").value);
    }
    else {
        number1 = number1 + number2;
        number2 = Number(document.getElementById("txtNum").value);
    }
    document.getElementById("txtNum").value = "";
    finalAction = "Add";

}

function Substraction() {
    if (number1 == 0) {
        number1 = Number(document.getElementById("txtNum").value);
    }
    else if (number2 == 0) {
        number2 = Number(document.getElementById("txtNum").value);
    }
    else {
        number1 = number1 - number2;
        number2 = Number(document.getElementById("txtNum").value);
    }
    document.getElementById("txtNum").value = "";
    finalAction = "sub";
}

function Devide() {
    if (number1 == 0) {
        number1 = Number(document.getElementById("txtNum").value);
    }
    else if (number2 == 0) {
        number2 = Number(document.getElementById("txtNum").value);
    }
    else {
        number1 = number1 / number2;
        number2 = Number(document.getElementById("txtNum").value);
    }
    document.getElementById("txtNum").value = "";
    finalAction = "div";
}

function Multiply() {
    if (number1 == 0) {
        number1 = Number(document.getElementById("txtNum").value);
    }
    else if (number2 == 0) {
        number2 = Number(document.getElementById("txtNum").value);
    }
    else {
        number1 = number1 * number2;
        number2 = Number(document.getElementById("txtNum").value);
    }
    document.getElementById("txtNum").value = "";
    finalAction = "mul";
}

function Equeals() {
    let total;
    number1 = number1 + number2;
    number2 = Number(document.getElementById("txtNum").value);

    if (finalAction == "Add") {
        total = number1 + number2;
    }
    else if (finalAction == "sub") {
        total = number1 - number2;
    }
    else if (finalAction == "div") {
        total = number1 / number2;
    }
    else if (finalAction == "mul") {
        total = number1 * number2;
    }

    document.getElementById("txtNum").value = total;
    number1 = 0;
    number2 = 0;

}

