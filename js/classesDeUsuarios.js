export class Administrador {
    constructor(nombreUsuario, email, contrasenia, repetirContrasenia) {
        this.nombre = nombreUsuario;
        this.email = email;
        this.contrasenia = contrasenia;
        this.repetirContrasenia = repetirContrasenia;
        this.acceso = true;
    }
    // propiedades conmutadas: (getters y setters)
    set setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    set setEmail(nuevoEmail) {
        this.email = nuevoEmail;
    }
    set setContrasenia(nuevaContrasenia) {
        this.contrasenia = nuevaContrasenia;
    }
    set setRepetirContrasenia(nuevoReContrasenia) {
        this.repetirContrasenia = nuevoReContrasenia;
    }
    get getNomre() {
        return this.nombre;
    }
    get getEmail() {
        return this.email;
    }
    get getContrasenia() {
        return this.contrasenia;
    }
    get getRepetirContrasenia() {
        return this.repetirContrasenia;
    }

    // metodos de la clase:
    mostrarDatos() {
        document.write(`<ul>
    <li>Nombre: ${this.nombre}</li>
    <li>Email:${this.email}</li>
    </ul>`);
    }
}
export class Invitado extends Administrador {
    constructor(nombreUsuario, direccion, email, contrasenia, repetirContrasenia) {
        super(nombreUsuario, email, contrasenia, repetirContrasenia);
        this.direccion = direccion;
        this.productosSeleccionados = [];
    }

    // propiedades conmutadas: (getters y setters)
    set setDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
    }
    get getDireccion() {
        return this.direccion;
    }

    //metodos
    agregarProducto(producto) {
        this.productosSeleccionados.push(producto);
    }
}
