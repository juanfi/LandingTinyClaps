// const form = document.querySelector("#interestForm");
// const formMessage = document.querySelector("#formMessage");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(form);
//   const bodyData = new URLSearchParams(formData);

//   fetch("https://formsubmit.co/juanfi@gmail.com", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: bodyData.toString(),
//   })
//     .then(() => {
//       form.reset();
//       formMessage.textContent = "Gracias. Te has apuntado a la lista de prueba.";
//     })
//     .catch(() => {
//       formMessage.textContent = "No se ha podido enviar. Inténtalo de nuevo en unos minutos.";
//     });
// });

const form = document.querySelector("#interestForm");
const formMessage = document.querySelector("#formMessage");
const submitButton = document.querySelector(".submit-button");

if (form && submitButton) {
  form.addEventListener("submit", () => {
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;
  });
}