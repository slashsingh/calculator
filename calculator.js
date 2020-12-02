var firstOperand = "", secondOperand = "", operation, isSecondActive = false;

function calculate() {
	firstOperand = parseFloat(firstOperand);
	secondOperand = parseFloat(secondOperand);
	console.log(firstOperand);
	console.log(secondOperand);
	switch (operation) {
		case "+":
			return firstOperand + secondOperand;
			break;
		case "-":
			return firstOperand - secondOperand;
		case "*":
			return firstOperand * secondOperand;
		case "/":
			return firstOperand / secondOperand;
		case "%":
			return (firstOperand / 100) * secondOperand;
		default:
			// statements_def
			break;
	}
}

function getOperator(operator) {
	console.log(operator);
	if((secondOperand !== "")) {
		displayResult(false);
	}
	operation = operator;
	isSecondActive = true;
}

function displayResult(isEqualTo) {
	firstOperand = (isEqualTo && (secondOperand == ""))? firstOperand: calculate();
	document.getElementById('display').value = firstOperand;
	secondOperand = "";
}

function display(char) {
	if(isSecondActive) {
		secondOperand += char;
		document.getElementById('display').value = secondOperand;
	}
	else {
		firstOperand += char;
		document.getElementById('display').value = firstOperand;	
	}
}

function changeSign() {
	var res = -1*parseFloat(document.getElementById('display').value);
	document.getElementById('display').value = res;
	if(isSecondActive) {
		secondOperand = res;
	}
	else{
		firstOperand = res;
	}
}

function reset() {
	document.getElementById('display').value = '';
	firstOperand = "";
	secondOperand = "";
	isSecondActive = false;
}

function deleteLast() {
	var res = document.getElementById('display').value.slice(0, -1);
	document.getElementById('display').value = res;
	if(isSecondActive) {
		secondOperand = res;
	}
	else{
		firstOperand = res;
	}
}