const form = document.querySelector("#interestForm");
const submitButton = document.querySelector("#interestButton");

if (form && submitButton) {
  form.addEventListener("submit", () => {
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;
  });
}