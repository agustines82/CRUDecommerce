//tomamos el parametro de la URL
const urlParametro = new URLSearchParams(window.location.search);
let codigoUrl = urlParametro.get("codigo");
//buscar en el local storge el dron con el codigo del parametro que viene por URL
let listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
let dronBuscado = listaProductos.find((dron) => dron.codigo === codigoUrl);
