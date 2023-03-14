const textareaEl = document.getElementById("textarea");
const totaCounterEl = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
    console.log("key is pressed");
    updateCounter();
});
updateCounter();

function updateCounter() {
    totaCounterEl.innerText = textareaEl.value.length;
    remainingCounter.innerText =
        textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
