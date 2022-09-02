class Producto {
    constructor(codigo, marca, modelo, precio, categoria, descripcion, stock, imagen) {
        this.codigo = codigo;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.stock = stock;
        this.imagen = imagen;
        this.listadoProductos = [];
    }
    // propiedades conmutadas: (getters y setters)
    set setCodigo(nuevoCodigo) {
        this.codigo = nuevoCodigo;
    }
    set setMarca(nuevaMarca) {
        this.marca = nuevaMarca;
    }
    set setModelo(nuevoModelo) {
        this.modelo = nuevoModelo;
    }
    set setPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio;
    }
    set setCategoria(nuevaCategoria) {
        this.categoria = nuevaCategoria;
    }
    set setDescripcion(nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    }
    set setStock(nuevoStock) {
        this.stock = nuevoStock;
    }
    set setImagen(nuevaImagen) {
        this.imagen = nuevaImagen;
    }
    set setListadoProductos(nuevoListado) {
        this.listadoProductos = nuevoListado;
    }

    get getCodigo() {
        return this.codigo;
    }
    get getMarca() {
        return this.marca;
    }
    get getModelo() {
        return this.modelo;
    }
    get getPrecio() {
        return this.precio;
    }
    get getCategoria() {
        return this.categoria;
    }
    get getDescripcion() {
        return this.descripcion;
    }
    get getStock() {
        return this.stock;
    }
    get getImagen() {
        return this.imagen;
    }
    get getListadoProductos() {
        return this.listadoProductos;
    }
    //metodos:
    mostrarDatos() {
        document.write(`<ul>
    <li>Codigo: ${this.codigo}</li>
    <li>Marca:${this.marca}</li>
    <li>Modelo:${this.modelo}</li>
    <li>Precio:${this.precio}</li>
    <li>Categoria:${this.categoria}</li>
    <li>Descripcion:${this.descripcion}</li>
    <li>Stock:${this.stock}</li>
    <li>Imagen:${this.imagen}</li>
    </ul>`);
    }
    agregarProducto(producto) {
        this.listadoProductos.push(producto);
    }
}
