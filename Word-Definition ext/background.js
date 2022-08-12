let registartion = null;

(() => {
  if ("serviceWorker" in navigator) {
    window.navigator.serviceWorker
      .register("./background.js", { scope: "./" })
      .then((res) => {
        registartion = res;
        console.log("Service worker has been registered.");
      })
      .catch((err) => {
        console.log("Could not register service worker.");
      });
  }
})();

console.log("Background loaded");
window.word = "";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  word = request.text;
});

// function unregister_service_worker() {
//   navigator.serviceWorker
//     .getRegistration()
//     .then((registrations) => {
//       registrations.forEach((registration) => {
//         registration.unregister();
//         console.log("Service worker has been unregistered.");
//       });
//     })
//     .catch((err) => {
//       console.log("Could not unregister service worker.");
//     });
// }
