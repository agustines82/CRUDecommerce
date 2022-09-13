let carrito = JSON.parse(sessionStorage.getItem("carritoKey")) || [];
cargaCarrito();
function cargaCarrito() {
    if (carrito.length > 0) {
        carrito.forEach((itemProducto) => {
            carritoDeCompras(itemProducto);
        });
    }
}
//dibujamos los productos seleccionados

function carritoDeCompras(dronCarrito) {
    let carritoDronero = document.getElementById("carritoDronero");
    carritoDronero.innerHTML += `
<div class="card mb-3 my-5" >
<div class="row g-0">
  <div class="col-md-4">
    <img src="${dronCarrito.imagen}" class="img-fluid rounded-start" alt="${dronCarrito.titulo}">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Marca y Modelo: ${dronCarrito.marca} - ${dronCarrito.modelo}</h5>
      <p class="card-text">Precio: $${dronCarrito.precio}</p>
      <p class="card-text"> Categoria: ${dronCarrito.categoria} </p>
      <p class="card-text">Descripción: ${dronCarrito.descripcion}</p>
      <p class="card-text"><small class="text-muted">stock: ${dronCarrito.stock} unidades</small></p>
    </div>   
  </div>
</div>
</div>
`;
}
