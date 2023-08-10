function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const checkbox = document.getElementById ("terminos");

checkbox.addEventListener('click', function(){
    if (checkbox.checked) {
        showAlertSuccess ()
    }
    else {
        showAlertError ()
    }
})