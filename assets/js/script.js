
const $form = document.querySelector("#form");
const d = document;
document.addEventListener("submit", (e) => {
if (e.target === $form) {
const $username = d.querySelector("#username").value;
const $password = d.querySelector("#password").value;
const $email = d.querySelector("#email").value;
const $phonenumber = d.querySelector("#phonenumber").value;
const $birthdate = d.querySelector("#birthdate").value;

console.log(
$username,
$password,
$email,
$phonenumber,
$birthdate
);
}
});



$(document).ready(function(){
  $('#birthdate').mask('00/00/0000');
  $('#phonenumber').mask('000-000-000');
 })