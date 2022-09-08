import { Invitado } from "./classesDeUsuarios.js";
import { validarNombre, validarDireccion, validarEmail, validarContrasenia } from "./helpers2.js";

export let listadoInvitados = JSON.parse(localStorage.getItem("listadoInvitadosKey")) || [];

let formulario = document.getElementById("formRegistro");
let nombre = document.getElementById("nombreRegistro");
let direccion = document.getElementById("direccionRegistro");
let email = document.getElementById("emailRegistro");
let contrasenia = document.getElementById("Password1Registro");
let contrasenia2 = document.getElementById("Password2Registro");
let btnRegistro = document.getElementById("btnRegistro");

//eventos:
formulario.addEventListener("submit", guardarInvitado);

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

function guardarInvitado(e) {
    e.preventDefault();
    if (
        validarNombre(nombre) &&
        validarDireccion(direccion) &&
        validarEmail(email) &&
        validarContrasenia(contrasenia) &&
        validarContrasenia(contrasenia2)
    ) {
        crearInvitado();
    } else {
        alert("Datos incorrectos");
    }
}
function crearInvitado() {
    //creamos el objeto con la clase invitado (los usuarios administradores se cargaran en otro arreglo en el codigo)
    const nuevoInvitado = new Invitado(nombre.value, direccion.value, email.value, contrasenia.value, contrasenia2.value);
    //guardo el Invitado en el arreglo
    listadoInvitados.push(nuevoInvitado);
    //guardo el invitado en el local storage
    guardarInvitadoEnLocalStorage();
    //reseteo los datos del formulario
    limpiarFormulario();
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
function guardarInvitadoEnLocalStorage() {
    localStorage.setItem("listadoInvitadosKey", JSON.stringify(listadoInvitados));
}
