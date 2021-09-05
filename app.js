let txtInput = document.querySelector("#txt-input");
let btnTranslate = document.querySelector("#btn-translate");
let txtOutput = document.querySelector("#output");

let serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(text) {
  return serverURL + "?" + "texr=" + text;
}

function errorHandler(error) {
  console.log("error occured" + error);
  alert("Something is wrong with server please try after sometime.");
}

btnTranslate.addEventListener("click", clickEventHandler);
