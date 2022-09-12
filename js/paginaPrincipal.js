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

//Filtro de busqueda Js

btn.onclick = function(){
  let buscar = document.getElementById("buscar").value;
  if (buscar == "Premium"){
    panel.innerHTML = 
    "◉Drone DJI Mavic Mini 2 Fly More Combo 3 Baterías Cámara 4K 30fps 10km Estabilizador 3 Ejes";
  }
  if(buscar == "Standar"){
    panel.innerHTML = "◉Drone DJI Mavic Air 2 c/ Cámara 4K 48Mpx HDR Vuelo Seguro APAS 3.0";
  }
  if(buscar == "Basico"){
    panel.innerHTML = "◉Drone DJI Mini SE Fly More Combo 3 Baterías Cámara 2.7K Ultra Liviano";
  } else{
    getElementById.buscar.
    panel.innerHTML = "No se encontro ningun resultado";
  }
}





