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

let listadoInvitados = JSON.parse(localStorage.getItem("listadoInvitadosKey")) || [];
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

//variable para controlar si creo o actualizo el producto
let productoNuevo = true; //si es true crea el producto , si es false actualiza un producto.

//eventos:
formulario.addEventListener("submit", guardarProducto);

//mostrar los datos que esten cargados en una tabla
cargaInicialProductos();
cargaInicialInvitados();
function cargaInicialProductos() {
    //si el arreglo esta vacio no dibujo nada, sino hay que dibujar la tabla:
    if (listaProductos.length > 0) {
        //dibujar una fila por cada objeto que este en el arreglo:
        listaProductos.forEach((itemProducto) => {
            crearFilaProducto(itemProducto);
        });
    }
}
function cargaInicialInvitados() {
    //si el arreglo esta vacio no dibujo nada, sino hay que dibujar la tabla:
    if (listadoInvitados.length > 0) {
        //dibujar una fila por cada objeto que este en el arreglo:
        listadoInvitados.forEach((invitada) => {
            crearFilaInvitado(invitada);
        });
    }
}
function crearFilaProducto(producto) {
    let tablaProductos = document.querySelector("#tablaProductos");
    tablaProductos.innerHTML += `
    <tr>
                        <td>${producto.codigo} </td>
                        <td class="text-center">${producto.marca}</td>
                        <td class="text-center">${producto.modelo}</td>
                        <td class="text-center">${producto.precio}</td>
                        <td class="text-center">${producto.categoria}</td>
                        <td>${producto.descripcion}</td>
                        <td class="text-center">${producto.stock}</td>
                        <td>${producto.imagen}</td>
                        <td class="text-center">
                            <button type="button" class="btn btn-warning"><i class="bi bi-arrow-repeat" onclick="editarProducto('${producto.codigo}')"></i></button>
                            <button type="button" class="btn btn-danger mt-1" onclick="borrarProducto('${producto.codigo}')"><i class="bi bi-x"></i></button>
                        </td>
                    </tr>`;
}
function crearFilaInvitado(invitado) {
    let tablaInvitados = document.querySelector("#tablaInvitados");
    tablaInvitados.innerHTML += `
    <tr>
                        <td>${invitado.nombre} </td>
                        <td class="text-center">${invitado.direccion}</td>
                        <td class="text-center">${invitado.email}</td>
                        <td class="text-center">${invitado.contrasenia}</td>   
                        <td class="text-center">
                            <button type="button" class="btn btn-danger mt-1" onclick="borrarInvitado('${invitado.nombre}')"><i class="bi bi-x"></i></button>
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
categoria.addEventListener("change", () => {
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
    productoNuevo = true;
    limpiarForm();
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
        if (productoNuevo) {
            crearProductoNuevo();
        } else {
            actualizarProducto();
        }
    } else {
        alert("Datos incorrectos");
    }
}

function crearProductoNuevo() {
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
    //dibujamos la fila del producto en la tabla
    crearFilaProducto(nuevoProducto);
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

//funcion para borrar el producto
window.borrarProducto = function (codigo) {
    //ventana de sweet alert preguntando si estamos seguros de borrar
    Swal.fire({
        title: "??Est??s seguro?",
        text: "Esta accion no se podr?? revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            //buscamos el codigo en el arreglo de listado de productos y lo borramos
            let listaProductos2 = listaProductos.filter((producto) => {
                return producto.codigo != codigo;
            });
            listaProductos = listaProductos2;
            //actualizamos el local storage
            guardarProductosEnLocalStorage();
            //actualizamos la tabla
            borrarTablaProductos();
            //generamos de nuevo la tabla
            cargaInicialProductos();
            Swal.fire("Eliminado!", "El producto fue eliminado.", "success");
        }
    });
};

function borrarTablaProductos() {
    let tablaProductos = document.querySelector("#tablaProductos");
    tablaProductos.innerHTML = "";
}

//funcion para borrar el Invitado
window.borrarInvitado = function (nombre) {
    //ventana de sweet alert preguntando si estamos seguros de borrar
    Swal.fire({
        title: "??Est??s seguro?",
        text: "Esta accion no se podr?? revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            //buscamos el codigo en el arreglo de listado de productos y lo borramos
            let listadoInvitados2 = listadoInvitados.filter((invitado) => {
                return invitado.nombre != nombre;
            });
            listadoInvitados = listadoInvitados2;
            //actualizamos el local storage
            guardarInvitadoEnLocalStorage();
            //actualizamos la tabla
            borrarTablaInvitados();
            //generamos de nuevo la tabla
            cargaInicialInvitados();
            Swal.fire("Eliminado!", "El usuario fue eliminado.", "success");
        }
    });
};

function borrarTablaInvitados() {
    let tablaInvitados = document.querySelector("#tablaInvitados");
    tablaInvitados.innerHTML = "";
}
function guardarInvitadoEnLocalStorage() {
    localStorage.setItem("listadoInvitadosKey", JSON.stringify(listadoInvitados));
}

//funcion para editar el producto
window.editarProducto = function (codigoBuscado) {
    productoNuevo = false;
    limpiarForm();
    //buscar del arreglo de productos el producto selecionado
    let productoBuscado = listaProductos.find((producto) => producto.codigo === codigoBuscado);
    //cargar los datos del producto en el formulario
    codigo.value = productoBuscado.codigo;
    marca.value = productoBuscado.marca;
    modelo.value = productoBuscado.modelo;
    precio.value = productoBuscado.precio;
    categoria.value = productoBuscado.categoria;
    descripcion.value = productoBuscado.descripcion;
    stock.value = productoBuscado.stock;
    imagen.value = productoBuscado.imagen;

    // abrir ventana modal
    modalProducto.show();
};

function actualizarProducto() {
    //buscar la posicion del producto que estoy editando dentro del arreglo
    let posicionProductoBuscado = listaProductos.findIndex((producto) => producto.codigo === codigo.value);

    //actualizar los datos del producto que estoy editando
    listaProductos[posicionProductoBuscado].marca = marca.value;
    listaProductos[posicionProductoBuscado].modelo = modelo.value;
    listaProductos[posicionProductoBuscado].precio = precio.value;
    listaProductos[posicionProductoBuscado].categoria = categoria.value;
    listaProductos[posicionProductoBuscado].descripcion = descripcion.value;
    listaProductos[posicionProductoBuscado].stock = stock.value;
    listaProductos[posicionProductoBuscado].imagen = imagen.value;

    //actualizar el local storage
    guardarProductosEnLocalStorage();

    //actualizar la tabla
    borrarTablaProductos();
    cargaInicialProductos();

    //cerrar la ventana modal
    modalProducto.hide();
    limpiarForm();
    //indicarle lo que sucedio al usuario
    Swal.fire("Editado!", "El producto fue correctamente modificado!.", "success");
}
