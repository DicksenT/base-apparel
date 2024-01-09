let form = document.querySelector(".form");
let email = document.querySelector(".email");
const formEmail = document.querySelector(".form-email");
const errorImg = document.querySelector(".error");
const errorMsg = document.querySelector(".error-msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let message = [];
  if (email.value === "" || email.value == null) {
    message.push("Please fill out the email");
  } else if (!email.value.match(/(\w+.+)@+\w+\.+\w{2,}/g)) {
    message.push("Please provide a valid email");
  }
  if (message.length > 0) {
    errorImg.style.display = "block";
    formEmail.style.border = "1px solid hsl(0, 93%, 68%)";
    errorMsg.innerText = message.join(", ");
    errorMsg.style.color = "hsl(0, 93%, 68%)";
  } else {
    formEmail.style.border = "1px solid green";
    errorMsg.style.color = "green";
    errorMsg.innerText = "Thanks!";
    errorImg.style.display = "none";
  }
});
