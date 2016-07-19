var inputFtoC;
var inputCtoF;

function calculateTotal(){
inputFtoC = document.getElementById("inputFtoC").value;
inputCtoF = document.getElementById("inputCtoF").value;

var solutionFtoC = (inputFtoC - 32) * (5 / 9);
var solutionCtoF = inputCtoF * 9 / 5 + 32;

document.getElementById("solutionFtoC").innerHTML = solutionFtoC;
document.getElementById("solutionCtoF").innerHTML = solutionCtoF;
}

document.getElementById("convertFtoC").onclick = calculateTotal;
document.getElementById("convertCtoF").onclick = calculateTotal;


