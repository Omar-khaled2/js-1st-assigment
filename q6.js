alert("The Following program check  given positive number is a multiple of 3 or 7");

var number1 = Number(prompt("enter your number"));




if (number1 %3==0  || number1 %7==0) {
    var result = ("TRUE");
    
}
else{
    var result=("FULSE");
}

document.getElementById("jsWritten").innerText=result;