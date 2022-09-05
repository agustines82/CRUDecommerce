import { Producto } from "./classProducto.js";
import {
    validarCodigo,
    validarMarca,
    validarModelo,
    validarPrecio,
    validarCategoria,
    validarDescripcion,
    validarStock,
    validarImagen,
} from "./helpers.js";

let listaProductos = [];

let formulario = document.getElementById("formProductos");
let codigo = document.getElementById("codigo");
let marca = document.getElementById("marca");
let modelo = document.getElementById("modelo");
let precio = document.getElementById("precio");
let categoria = document.getElementById("categoria");
let descripcion = document.getElementById("descripcion");
let stock = document.getElementById("stock");
let imagen = document.getElementById("imagen");

//eventos:
formulario.addEventListener("submit", guardarProducto);

//validaciones del form de la ventana modal de la pagina de administracion.
codigo.addEventListener("blur", () => {
    validarCodigo(codigo);
});
marca.addEventListener("blur", () => {
    validarMarca(marca);
});
modelo.addEventListener("blur", () => {
    validarModelo(modelo);
});
precio.addEventListener("blur", () => {
    validarPrecio(precio);
});
categoria.addEventListener("blur", () => {
    validarCategoria(categoria);
});
descripcion.addEventListener("blur", () => {
    validarDescripcion(descripcion);
});
stock.addEventListener("blur", () => {
    validarStock(stock);
});
imagen.addEventListener("blur", () => {
    validarImagen(imagen);
});

//codigo para instanciar la ventana modal del formulario de carga de productos de la pagina administrador.
const modalProducto = new bootstrap.Modal(document.getElementById("formularioProducto"));
const btnModalProducto = document.getElementById("btnModalProducto");
btnModalProducto.addEventListener("click", mostrarFormulario);
function mostrarFormulario() {
    modalProducto.show();
    //cargamos el identificador unico en el imput del cogigo:
    codigo.value = uuidv4(); //metodo que genera indentificadores unicos
}

//creamos objeto producto
function guardarProducto(e) {
    e.preventDefault();
    //volvemos a validar
    if (
        validarCodigo(codigo) &&
        validarMarca(marca) &&
        validarModelo(modelo) &&
        validarPrecio(precio) &&
        validarCategoria(categoria) &&
        validarDescripcion(descripcion) &&
        validarStock(stock) &&
        validarImagen(imagen)
    ) {
        //creamos objeto producto
        let nuevoProducto = new Producto(
            codigo.value,
            marca.value,
            modelo.value,
            precio.value,
            categoria.value,
            descripcion.value,
            stock.value,
            imagen.value
        );
        //guardamos el producto en el arreglo
        listaProductos.push(nuevoProducto);
        //limpiar el formulario
        limpiarForm();
    } else {
        alert("Datos incorrectos");
    }
}
function limpiarForm() {
    formulario.reset(); //resetea el value de todo
    //reseteamos las clases:
    codigo.className = "form-control";
    marca.className = "form-control";
    modelo.className = "form-control";
    precio.className = "form-control";
    categoria.className = "form-control";
    descripcion.className = "form-control";
    stock.className = "form-control";
    imagen.className = "form-control";
    //generamos un nuevo codigo
    codigo.value = uuidv4();
}
