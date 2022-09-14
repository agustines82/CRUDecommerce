let listadoInvitados = JSON.parse(localStorage.getItem("listadoInvitadosKey")) || [];
//validaciones para el form de la pagina de Registro:
export function validarNombre(input) {
    if (input.value.trim().length >= 3 && input.value.trim().length <= 35) {
        //buscar en el arreglo de usuarios el valor del input ingresado y si existe no cargarlo nuevamente
        let nombreRepetido = listadoInvitados.find((invitado) => {
            return invitado.nombre === input.value;
        });
        if (listadoInvitados.includes(nombreRepetido)) {
            alert("el nombre no esta disponible");
        } else {
            input.className = "form-control is-valid";
            return true;
        }
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

export function validarDireccion(input) {
    if (input.value.trim().length >= 4 && input.value.trim().length <= 50) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

export function validarEmail(input) {
    let expReg = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
    if (expReg.test(input.value)) {
        let emailRepetido = listadoInvitados.find((invitado) => {
            return invitado.email === input.value;
        });
        if (listadoInvitados.includes(emailRepetido)) {
            alert("el email ya fue registrado");
        } else {
            input.className = "form-control is-valid";
            return true;
        }
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

export function validarContrasenia(input) {
    //validar que tenga como minimo 8 caracteres alfanumericos con exp reg
    let expReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8}$/;
    if (expReg.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}
//validacion para login
// si el email se encuentra cargado en la lista de usuarios entonces deja proseguir sino te pide registrarte
export function validarEmailModal(input) {
    let expReg = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;
    if (expReg.test(input.value)) {
        let emailRepetido = listadoInvitados.find((invitado) => {
            return invitado.email === input.value;
        });
        if (!listadoInvitados.includes(emailRepetido)) {
            alert("email no registrado, registrate primero por favor");
        } else {
            return true;
        }
    } else {
        return false;
    }
}

export function validarContraseniaModal(input) {
    //validar que tenga como minimo 8 caracteres alfanumericos con exp reg
    let expReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8}$/;
    if (expReg.test(input.value)) {
        let contraseniaCorrecta = listadoInvitados.find((invitado) => {
            return invitado.contrasenia === input.value;
        });
        if (listadoInvitados.includes(contraseniaCorrecta)) {
            return true;
        }
    } else {
        alert("Tu email o contraseñia es incorrecto");
        return false;
    }
}
