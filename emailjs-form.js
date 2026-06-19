
// Replace these with your EmailJS details
emailjs.init("Nog1R9UUjKMLAOUk5");

function showFormMessage(form, message, isError = false) {
  let status = form.querySelector(".form-status-message");

  if (!status) {
    status = document.createElement("div");
    status.className = "form-status-message";
    status.style.marginTop = "1rem";
    status.style.fontWeight = "600";
    form.appendChild(status);
  }

  status.textContent = message;
  status.style.color = isError ? "#b00020" : "#0b6623";
}

function sendForm(formId){
  const form = document.getElementById(formId);
  if(!form) return;

  form.addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm(
      "Kizunaallience1209",
      "template_9xohmx3",
      this
    )
    .then(() => {
      return emailjs.send(
        "Kizunaallience1209",
        "template_q7uti3p",
        {
          name: this.name.value,
          email: this.email.value
        }
      );
    })
    .then(() => {
      showFormMessage(form, "Message sent successfully! Please check your email for confirmation.");
      form.reset();
    })
    .catch((error) => {
      showFormMessage(form, "Failed to send email. Please try again.", true);
      console.error(error);
    });
  });
}

sendForm("contact-form");
sendForm("enquiry-form-email");
