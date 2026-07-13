const form = document.querySelector("#interestForm");
const formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const netlifyData = new URLSearchParams(formData);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: netlifyData.toString(),
  })
    .then(() => {
      form.reset();
      formMessage.textContent = "Gracias. Te has apuntado a la lista de prueba.";
    })
    .catch(() => {
      formMessage.textContent = "No se ha podido enviar. Inténtalo de nuevo en unos minutos.";
    });
});
