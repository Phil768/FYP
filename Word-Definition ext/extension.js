//Variables.
const selectedWord = document.getElementById("selectedWord");
const selectedWordDefinition = document.getElementById(
  "selectedWordDefinition"
);
var word = "";

//Retrieveing the selected word from the content script which is saved in storage.
chrome.storage.local.get("word", function (data) {
  if (typeof data.word == "undefined") {
    console.log("ERROR");
  } else {
    word = data.word;
    selectedWord.innerHTML = word;
  }
});

//Dictionary API with the selected word as a variable.
let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

selectedWordDefinition.innerHTML = "hello";

loadJSON(url, (data) => {
  selectedWordDefinition.innerHTML = data.word;
});
