// input
let text = document.querySelector("#textInput");
let btn = document.querySelector("#btnTranslate");
let outputDiv = document.querySelector("#output");

btn.addEventListener("click", btnClicked);

let serverURL = "https://api.funtranslations.com/translate/groot.json";

function getGrootUrl(text){
        return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
        alert("Error! Try again later")
}

function btnClicked(){
        let inputText = text.value;
        
        fetch(getGrootUrl(inputText)) 
                .then(response => response.json())
                .then(json => {
                        var tranlatedText = json.contents.translated;
                        outputDiv.innerText = tranlatedText;
                        })
                .catch(errorHandler)
};

