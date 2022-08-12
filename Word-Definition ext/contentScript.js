window.addEventListener("mouseup", () => {
  console.log("Selected word");
  var selectedText = window.getSelection().toString();
  console.log(selectedText);

  if (selectedText.length > 0) {
    //Creating the message object.
    let message = {
      text: selectedText,
    };
    //Send message to the background script.
    chrome.runtime.sendMessage(message);
  }
});
