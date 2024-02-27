let x =+ document.getElementById("txtNum1").value;
let y =+ document.getElementById("txtNum2").value;

function Addition(){    
    document.getElementById("Output").innerHTML="Output is - " + x + " + " + y + " = "+ (x+y);
}

function Substraction(){
    document.getElementById("Output").innerHTML="Output is - " + x + " - " + y + " = "+ (x-y);
}

function Devide(){
    document.getElementById("Output").innerHTML="Output is - " + x + " / " + y + " = "+ (x/y);
}

function Multiply(){
    document.getElementById("Output").innerHTML="Output is - " + x + " * " + y + " = "+ (x*y);
}