var inputName = document.getElementById("inputName");
var inputLocation = document.getElementById("inputLocation");
var inputPrice = document.getElementById("inputPrice");
var inputStyle = document.getElementById("inputStyle");
var inputDates = document.getElementById("inputDates");
var textareaInput = document.getElementById("textareaInput");

var subbtn = document.getElementById("subbtn");

var result = document.getElementById("result");

function clearInput() {
    inputName.value = '';
    inputLocation.value = '';
    inputPrice.value = '';
    inputStyle.value = '';
    inputDates.value = '';
    textareaInput.value = '';
}

subbtn.addEventListener("click", function() {
    result.innerHTML = inputName.value + ": " + inputPrice.value ;

    clearInput();
})