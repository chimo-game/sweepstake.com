const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),


    claimField = form.querySelector(".claim-field"),
    claimInput = claimField.querySelector(".claim")



function validateUsername() {

    if (claimInput.value == '') {
        // alert("Please input a Value");
        // return false;

        return claimField.classList.add("invalid");
    }
    claimField.classList.remove("invalid");

}

// Email Validtion
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
    }
    emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
        if (pInput.type === "password") {
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return (pInput.type = "text");
        }
        eyeIcon.classList.replace("bx-show", "bx-hide");
        pInput.type = "password";
    });
});

// Password Validation
// function createPass() {
//     const passPattern = 8;

//     if (!passInput.value.match(passPattern)) {
//         return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
//     }
//     passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
// }

// Confirm Password Validtion
// function confirmPass() {
//     if (passInput.value !== cPassInput.value || cPassInput.value === "") {
//         return cPassField.classList.add("invalid");
//     }
//     cPassField.classList.remove("invalid");
// }

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form submitting
    validateUsername();
    checkEmail();
    // createPass();
    // confirmPass();

    //calling function on key up
    emailInput.addEventListener("keyup", validateUsername);
    emailInput.addEventListener("keyup", checkEmail);
    // passInput.addEventListener("keyup", createPass);
    // cPassInput.addEventListener("keyup", confirmPass);

    if (
        !emailField.classList.contains("invalid") &&
        !claimField.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }
});



