var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// outputDiv.innerText = "Kaustubh"

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=Kaustubh Manglurkar";

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(input) {

    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {

    // console.log("error occured", error)
    alert("Something wrong with server! Try again after some time");

}

function clickHandler() {

    // outputDiv.innerText = "asasasdssd " + txtInput.value;

    var inputText = txtInput.value; //taking input

    //calling the server for processing

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {

            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })

        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)