alert("The Following program to calculate tempreture")

var operation = prompt("Type 'c' for celisus fahrenheit or 'f' from fahrenheit to celisus");






if (operation=="c") {
    var degree = Number(prompt("enter degree in celsius to convert to fahrenheit"));
    var fahrenheit = (degree * 9/5) + 32;
    document.getElementById("jsWritten").innerText=fahrenheit + "  f*";

}

if (operation=="f") {
    var degree = Number(prompt("enter degree in fahrenheit to convert to celisus"));
    var celisus = (degree -32) * 5/9;

    document.getElementById("jsWritten").innerText=celisus + "  c*";
}


