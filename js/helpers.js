//validaciones para el form de la pagina de Registro:
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

//validaciones para el form de la ventana modal de la pagina de administrador
export function validarCodigo(input) {
    if (input.value.length === 3) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

export function validarMarca(input) {
    if (input.value.length >= 3 && input.value.length <= 30) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}
export function validarModelo(input) {
    if (input.value.length >= 3 && input.value.length <= 30) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}
export function validarPrecio(input) {
    if (input.value >= 1) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}
export function validarCategoria(input) {
    if (input.value.length >= 3 && input.value.length <= 30) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}
export function validarDescripcion(input) {
    if (input.value.length >= 20 && input.value.length <= 300) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}
export function validarStock(input) {
    if (input.value >= 1) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}
export function validarImagen(input) {
    let imagen = /^(ftp|http|https):\/\/[^ "]+$/;
    if (imagen.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}
