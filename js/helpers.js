//validaciones para el form de la ventana modal de la pagina de administrador
export function validarCodigo(input) {
    if (input.value.length >= 3) {
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
export function validarCategoria(opcion) {
    if (opcion.value.length > 0) {
        opcion.className = "form-control is-valid";
        return true;
    } else {
        opcion.className = "form-control is-invalid";
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
