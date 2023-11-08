const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Event handler for the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Stores the triggered events
event.preventDefault();
  butInstall.classList.toggle("hidden", false);
  butInstall.addEventListener("click", async () => {
  const promptEvent = event;

  if (!promptEvent) {
    return;
  }
  // Shows prompt
  promptEvent.prompt();
  // Resets the deferred prompt variable, it can only be used once
  event = null;
  butInstall.classList.toggle("hidden", true);
});
  // Removes the hidden class from the button

});

// Implements a click event handler on the `butInstall` element


// Event handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // Clears prompt
  event = null;
});