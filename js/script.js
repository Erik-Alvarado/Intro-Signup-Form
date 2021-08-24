const form = document.querySelector("subscribe-form");
const input = document.getElementById("input");
const errorMsgs = document.querySelector("error-msg");

input.oninvalid = invalid;
form.onsubmit = submit;

function invalid(event) {
  errorMsgs.removeAttribute("hidden");
}
