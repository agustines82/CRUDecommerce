export function validarNombre(input) {
    if (input.value.trim().length >= 3 && input.value.trim().length <= 35) {
        input.className = "form-control is-valid";
        return true;
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
        input.className = "form-control is-valid";
        return true;
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
