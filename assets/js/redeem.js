const form = document.querySelector("form"),
    // emailField = form.querySelector(".email-field"),
    // emailInput = emailField.querySelector(".email"),
    claimField = form.querySelector(".claim-field"),
    claimInput = claimField.querySelector(".claim")

// Email Validtion
// function checkEmail() {
//     const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (!emailInput.value.match(emaiPattern)) {
//         return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with email pattern
//     }
//     emailField.classList.remove("invalid"); //removing invalid class if email value matched with emaiPattern
// }

function validateClaim() {

    if (claimInput.value == '') {
        // alert("Please input a Value");
        // return false;

        return claimField.classList.add("invalid");
    }
    claimField.classList.remove("invalid");

}

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
    e.preventDefault(); //preventing form submitting
    // checkEmail();
    validateClaim();

    // //calling function on key up
    // emailInput.addEventListener("keyup", checkEmail);
    // !emailField.classList.contains("invalid") &&

    if (

        !claimField.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }
});






