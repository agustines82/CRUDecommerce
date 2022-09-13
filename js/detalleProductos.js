//tomamos el parametro de la URL
const urlParametro = new URLSearchParams(window.location.search);
let codigoUrl = urlParametro.get("codigo");
//buscar en el local storge el dron con el codigo del parametro que viene por URL
let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let dronBuscado = listaProductos.find((dron) => dron.codigo === codigoUrl);
//dibujar los datos del dron
let detalleDron = document.getElementById("detalleDron");
detalleDron.innerHTML = `
<div class="card mb-3 my-5" >
<div class="row g-0">
  <div class="col-md-4">
    <img src="${dronBuscado.imagen}" class="img-fluid rounded-start" alt="${dronBuscado.titulo}">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">Marca y Modelo: ${dronBuscado.marca} - ${dronBuscado.modelo}</h5>
      <p class="card-text">Precio: $${dronBuscado.precio}</p>
      <p class="card-text"> Categoria: ${dronBuscado.categoria} </p>
      <p class="card-text">Descripción: ${dronBuscado.descripcion}</p>
      <p class="card-text"><small class="text-muted">stock: ${dronBuscado.stock} unidades</small></p>
    </div>
    <div class="ms-3 mb-3">
        <a class="btn btn-primary" href="error.html"><i class="bi bi-cart4"> Agregar al carrito</i></a>
    </div>
    
  </div>
</div>
</div>
`;
