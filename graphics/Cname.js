// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the text input element
    const textBox = document.querySelector(".custom-text-box input");

    // Add an event listener to react to changes in the text box
    textBox.addEventListener("input", function () {
        const enteredText = textBox.value;
        // Do something with the entered text, e.g., update a preview or send it to a server.
        console.log("Entered text: " + enteredText);
    });
});