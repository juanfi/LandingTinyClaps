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
const submitButton = document.querySelector("#interestButton");
const formMessage = document.querySelector("#formMessage");

if (form && submitButton) {
  form.addEventListener("submit", () => {
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    console.log("submit");
    event.preventDefault();

    fetch("https://formsubmit.co/juanfi@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
      .then(() => {
        form.reset();
        formMessage.textContent = "Gracias. Te has apuntado a la lista de prueba.";
        submitButton.textContent = "Apuntarme a la lista";
        submitButton.disabled = false;
      })
      .catch(() => {
        formMessage.textContent = "No se ha podido enviar. Inténtalo de nuevo en unos minutos.";
        submitButton.textContent = "Apuntarme a la lista";
        submitButton.disabled = false;
      });
  });
}