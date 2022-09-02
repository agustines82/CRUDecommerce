import { Invitado } from "./classesDeUsuarios.js";
import { validarNombre, validarDireccion, validarEmail, validarContrasenia } from "./helpers.js";

let formulario = document.getElementById("formRegistro");
let nombre = document.getElementById("nombreRegistro");
let direccion = document.getElementById("direccionRegistro");
let email = document.getElementById("emailRegistro");
let contrasenia = document.getElementById("Password1Registro");
let contrasenia2 = document.getElementById("Password2Registro");
let btnRegistro = document.getElementById("btnRegistro");

formulario.addEventListener("submit", crearUsuario);

//valicadiones
nombre.addEventListener("blur", () => {
    validarNombre(nombre);
});
direccion.addEventListener("blur", () => {
    validarDireccion(direccion);
});
email.addEventListener("blur", () => {
    validarEmail(email);
});
contrasenia.addEventListener("blur", () => {
    validarContrasenia(contrasenia);
});
contrasenia2.addEventListener("blur", () => {
    validarContrasenia(contrasenia2);
});

function crearUsuario(e) {
    e.preventDefault();
    if (
        validarNombre(nombre) &&
        validarDireccion(direccion) &&
        validarEmail(email) &&
        validarContrasenia(contrasenia) &&
        validarContrasenia(contrasenia2)
    ) {
        //creamos el objeto Usuario Invitado
        const nuevoUsuario = new Invitado(nombre.value, direccion.value, email.value, contrasenia.value, contrasenia2.value);
        //reseteo los datos del formulario
        limpiarFormulario();
    } else {
        alert("Datos incorrectos");
    }
}

function limpiarFormulario() {
    formRegistro.reset(); //resetea el value de todo
    //reseteamos las clases:
    nombre.className = "form-control";
    direccion.className = "form-control";
    email.className = "form-control";
    contrasenia.className = "form-control";
    contrasenia2.className = "form-control";
}
