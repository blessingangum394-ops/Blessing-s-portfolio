const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get values

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Error elements

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const messageError =
        document.getElementById("messageError");

    const successMessage =
        document.getElementById("successMessage");


    // Clear old messages

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    let isvalid = true;


    // Name validation

    if (name === "") {

        nameError.textContent =
            "Please enter your full name.";

        isvalid = false;

    } else if (name.length < 2) {

        nameError.textContent =
            "Name must contain at least 2 characters.";

        isvalid = false;
    }


    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        isvalid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isvalid = false;
    }


    // Message validation

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isvalid = false;

    } else if (message.length < 10) {

        messageError.textContent =
            "Message should contain at least 10 characters.";

        isvalid = false;
    }


    // Successful submission

    if (isvalid) {

        successMessage.textContent =
            "✓ Your message has been submitted successfully!";

        form.reset();
    }

});