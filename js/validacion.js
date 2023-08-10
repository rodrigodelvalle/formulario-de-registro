function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function verificarPassword() {
    var inputName = document.querySelector("#password1").value;
    if (inputName.length >= 6 && (document.querySelector("#password1").value == document.querySelector("#password2").value)) {
         showAlertSuccess(); 
}
else {
     showAlertError();
}}

// nueva rama NicoN