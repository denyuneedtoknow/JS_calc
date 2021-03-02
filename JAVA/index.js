var buttonPlus = document.getElementById('buttonPlus');
var buttonMenus = document.getElementById('buttonMenus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');



function makeOperation(operationCode) {

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);


    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;
    } else {
        window.alert('unknown operation');
    }
    window.alert(result);
}


function onOperationButtonClick(eventObject) {

    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}


var operationButtons = [buttonPlus, buttonMenus, buttonMultiply, buttonDevide];


for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener('click', onOperationButtonClick);

}