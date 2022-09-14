import { validarEmailModal, validarContrasenia } from "./helpers2.js";
import { listadoEmailAdmin } from "./usuarioAdmin.js";

let emailModalCargado = [];

let emailModal = document.getElementById("emailModal");
let contraseniaModal = document.getElementById("contraseniaModal");
let btnLogin = document.getElementById("btnLogin");
//eventos

btnLogin.addEventListener("click", guardarEmail);
//validaciones ventana modal

emailModal.addEventListener("blur", () => {
    validarEmailModal(emailModal);
});
contraseniaModal.addEventListener("blur", () => {
    validarContrasenia(contraseniaModal);
});

//codigo para instanciar la ventana modal de inicio de sesion
const modalLogin = new bootstrap.Modal(document.getElementById("formularioModalLogin"));
const btnModalLogin = document.getElementById("btnModalLogin");
btnModalLogin.addEventListener("click", mostrarLogin);
function mostrarLogin() {
    modalLogin.show();
}

//logica de pagina principal, para exponer productos
let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
cargaInicialExposicion();
function cargaInicialExposicion() {
    if (listaProductos.length > 0) {
        listaProductos.forEach((itemProducto) => {
            exponerProducto(itemProducto);
        });
    }
}
function exponerProducto(producto) {
    let exposicion = document.querySelector("#exposicionProductos");
    exposicion.innerHTML += ` <aside class="col-10 col-md-4 col-lg-3 align-items-center justify-content-center">
    <div class="card">
      <img
        src=" ${producto.imagen}"
        class="card-img-top"
        alt="${producto.modelo}" />
   
      <div class="card-body">
        <h5 class="card-title">
            ${producto.modelo}
        </h5>
        <p class="lead">$${producto.precio}</p>
        <button class="btn btn-dark" onclick="verPaginaDetalle('${producto.codigo}')">
        Ver mas
        </button>
      </div>
    </div>
  </aside>`;
}

//logica para mostrar link de administrador en el navbar de la pagina principal
//guardamos el email en una variable
function guardarEmail(e) {
    e.preventDefault();

    if (validarEmailModal(emailModal) && validarContrasenia(contraseniaModal)) {
        //guardamos el email en el arreglo
        emailModalCargado.push(emailModal.value);
        //cerramos la ventana modal
        modalLogin.hide();
        //mostramos el link
        mostrarLinkAdmin();
    }
}
mostrarLinkAdmin();
function mostrarLinkAdmin() {
    //buscamos el email cargado en el listado de email de administradores
    let emailBuscado = listadoEmailAdmin.includes(emailModalCargado[0]);

    if (emailBuscado) {
        //quito la clase ocultar de la etiqueta li
        let linkAdmin = document.querySelector("#mostrarAdmin");
        linkAdmin.className = "nav-item fs-3";
    }
}

//funcion para ver el producto expuesto en la pagina de detalle
window.verPaginaDetalle = function (codigo) {
    //contruimos la ruta para ir a la web de detallesProductos html con un parametro
    window.location.href = window.location.origin + "/pages/detalleProductos.html?codigo=" + codigo;
};

//Buscador Interno

btn.onclick = function(){
    let buscar = document.getElementById("buscar").value
    if (buscar == "Basico"){
   panel.innerHTML = "Drone DJI PHANTOM 4 RTK + 2 Baterias"
    }
    if (buscar == "Standar"){
        panel.innerHTML = "Drone DJI Mavic Mini 2 Single Cámara 4K 30fps 10km Alcance Estabilizador de 3 Ejes"
         }
         if (buscar == "Premium"){
            panel.innerHTML = "Drone DJI Mavic Air 2S Fly More Combo 3 Baterías Cámara 5.4K HDR APAS 4.0"
             }
             else{
                panel.innerHTML = "No se encontraron resultados"
             }
}
