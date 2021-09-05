let txtInput = document.querySelector("#txt-input");
let btnTranslate = document.querySelector("#btn-translate");
let txtOutput = document.querySelector("#output");

let serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(text) {
  return serverURL + "?" + "texr=" + text;
}
