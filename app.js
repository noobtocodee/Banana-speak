var btnTranslate = document.querySelector("#trnsltButton");
var txtInput = document.querySelector("#textInput");
var outputDiv = document.querySelector("#resultBox");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error occured ", error)
    alert("Something wrong with server, please try after 1 hr.")
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated;
            speechSynthesis.speak(
                new SpeechSynthesisUtterance(json.contents.translated)
            );           
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)