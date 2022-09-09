import { validarEmailModal, validarContrasenia } from "./helpers2.js";
import { listadoEmailAdmin } from "./usuarioAdmin.js";

let formModalLogin = document.getElementById("formModalLogin");
let emailModal = document.getElementById("emailModal");
let contraseniaModal = document.getElementById("contraseniaModal");

//eventos
formModalLogin.addEventListener("submit", mostrarLinkAdmin);

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
    exposicion.innerHTML += ` <aside class="col-10 col-md-4 col-lg-3 m-0 p-0 margen">
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
        <button type="button" class="btn btn-dark">
        <a href="pages/detalleProducto.html" class="card-link text-center">Ver mas</a>
        </button>
      </div>
    </div>
  </aside>`;
}

//logica para mostrar link de administrador en el navbar de la pagina principal
function mostrarLinkAdmin(e) {
    e.preventDefault();
    //si el email escrito en el formulario se encuentra en el arreglo de lista de administradores entonces habilito el link administrador
    let emailBuscado = listadoEmailAdmin.includes((email) => email === emailModal.value);
    console.log(emailBuscado);
    if (emailBuscado) {
        //agrego la etiqueta <a> a la etiqueta <li> del navbar de la pagina principal
        let linkAdmin = document.querySelector("#mostrarAdmin");
        linkAdmin.innerHTML = `<a class="nav-link text-light" href="pages/admin.html">Administrador</a>`;
    }
}
