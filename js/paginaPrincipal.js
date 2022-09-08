import { validarEmailModal, validarContrasenia } from "./helpers2.js";

let emailModal = document.getElementById("emailModal");
let contraseniaModal = document.getElementById("contraseniaModal");

emailModal.addEventListener("blur", () => {
validarEmailModal(emailModal);
});
contraseniaModal.addEventListener("blur", () => {
    validarContrasenia(contraseniaModal);
});

