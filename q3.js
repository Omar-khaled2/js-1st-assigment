alert("The Following program to calculate multiplication and division")

var number1 = Number(prompt("enter 1st number"));
var number2 = Number(prompt("enter 2nd number"));

var operation = prompt("Type 'm' for multiply' or 'd' to divide");

if (operation=="m") {
    var result = number1 * number2;
    
}

if (operation=="d") {
    var result = number1 / number2;
}


document.getElementById("jsWritten").innerText=result;