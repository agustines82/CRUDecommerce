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

let formulario = document.getElementById("formProductos");
let codigo = document.getElementById("codigo");
let marca = document.getElementById("marca");
let modelo = document.getElementById("modelo");
let precio = document.getElementById("precio");
let categoria = document.getElementById("categoria");
let descripcion = document.getElementById("descripcion");
let stock = document.getElementById("stock");
let imagen = document.getElementById("imagen");
const btnAdminProducto = document.getElementById("btnProducto");

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
