function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function verificarPassword() {

let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let email = document.getElementById("email").value;
let chbx = document.getElementById("terminos").checked;

    var inputName = document.querySelector("#password1").value;
    if (inputName.length >= 6 && (document.querySelector("#password1").value == document.querySelector("#password2").value) && nombre !== "" && apellido !== "" && email !== "" && chbx) {
         showAlertSuccess(); 
}
else {
     showAlertError();
}}

// nueva rama NicoN