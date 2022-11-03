
// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
    notificationToast.classList.add('closed');
});

// document.getElementById("number").innerHTML = Math.random();

// this script below i found by myself

let x = Math.floor((Math.random() * 4) + 1);
document.getElementById("number").innerHTML = x;

let y = Math.floor((Math.random() * 2) + 1);
document.getElementById("d").innerHTML = y;

let z = Math.floor((Math.random() * 4) + 1);
document.getElementById("d2").innerHTML = z + '$';