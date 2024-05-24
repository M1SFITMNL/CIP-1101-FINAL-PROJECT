// Initialize EmailJS
emailjs.init("WOAZrO7j9uzG2szqH");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Send email
    emailjs.send("service_373j77f", "template_op4yak8", data).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        // Show success modal
        var successModal = new bootstrap.Modal(
          document.getElementById("successModal"),
          {
            backdrop: true,
            keyboard: true,
          }
        );
        successModal.show();
        // Reset form
        event.target.reset();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
