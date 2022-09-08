import { validarEmailModal, validarContrasenia } from "./helpers2.js";

//validaciones ventana modal

let emailModal = document.getElementById("emailModal");
let contraseniaModal = document.getElementById("contraseniaModal");

emailModal.addEventListener("blur", () => {
  validarEmailModal(emailModal);
});
contraseniaModal.addEventListener("blur", () => {
  validarContrasenia(contraseniaModal);
});

//logica de pagina principal, para exponer productos

let listaProductos =
  JSON.parse(localStorage.getItem("listaProductosKey")) || [];

let exposicionProducto = listaProductos.forEach((producto) => {

  let exposicion = document.querySelector("#exposicionProductos");
  return exposicion.innerHTML += ` <aside class="col-10 col-md-4 col-lg-3 m-0 p-0 margen">
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
});


