//Variables.
const selectedWord = document.getElementById("selectedWord");

//Storing the entire background.js file into an abject.
let bgpage = chrome.extension.getBackgroundPage();
console.log(bgpage);
let word = bgpage.word;

//Setting the inner HTML of the selected Word div.
selectedWord.innerHTML = word;
