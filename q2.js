var days = Number(prompt("Enter number of days"));

var isLeapYear;
if (days==366) {
    isLeapYear = "leap year";
} else {
    isLeapYear = " is not a leap year.";
}

document.getElementById("jsWritten").innerText = isLeapYear;