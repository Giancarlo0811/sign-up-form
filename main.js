// verificar si las contraseñas son iguales
const password = document.getElementById("password")
const confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    password.style.borderColor = 'red';
    confirm_password.style.borderColor = 'red';
    confirm_password.setCustomValidity("Las contraseñas no coinciden");
  } else {
    password.style.borderColor = 'green';
    confirm_password.style.borderColor = 'green';
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;