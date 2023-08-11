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
let checkbox = document.getElementById("terminos").checked;

    var inputName = document.querySelector("#password1").value;
    if (inputName.length >= 6 && (document.querySelector("#password1").value == document.querySelector("#password2").value) && (nombre !== "") && (apellido !== "") && (email !== "") && checkbox) {
         showAlertSuccess(); 
}
else {
     showAlertError();
}}

// nueva rama NicoN

let checkbox = document.getElementById ("terminos");

checkbox.addEventListener('click', function(){
    if (checkbox.checked) {
        showAlertSuccess ()
    }
    else {
        showAlertError ()
    }
})

