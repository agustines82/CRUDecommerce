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

let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];

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

//mostrar los datos que esten cargados en una tabla
cargaInicial();
function cargaInicial() {
    //si el arreglo esta vacio no dibujo nada, sino hay que dibujar la tabla:
    if (listaProductos.length > 0) {
        //dibujar una fila por cada objeto que este en el arreglo:
        listaProductos.forEach((itemProducto) => {
            crearFila(itemProducto);
        });
    }
}
function crearFila(producto) {
    let tablaProductos = document.querySelector("#tablaProductos");
    tablaProductos.innerHTML += `
    <tr>
                        <td>${producto.codigo} </td>
                        <td class="text-center">${producto.marca}</td>
                        <td class="text-center">${producto.modelo}</td>
                        <td class="text-center">${producto.precio}</td>
                        <td class="text-center">${producto.categoria}</td>
                        <td width=20%>${producto.descripcion}</td>
                        <td class="text-center">${producto.stock}</td>
                        <td width=20%>${producto.imagen}</td>
                        <td class="text-center">
                            <button type="button" class="btn btn-warning"><i class="bi bi-arrow-repeat"></i></button>
                            <button type="button" class="btn btn-danger mt-1"><i class="bi bi-x"></i></button>
                        </td>
                    </tr>`;
}

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
        //guardamos en el web storage
        guardarProductosEnLocalStorage();
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
//guardar en el Local Storage:
function guardarProductosEnLocalStorage() {
    localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
}
