class Usuario {
    constructor(nombreUsuario, direccion, email, contrasenia, repetirContrasenia) {
        this.nombre = nombreUsuario;
        this.direccion = direccion;
        this.email = email;
        this.contrasenia = contrasenia;
        this.repetirContrasenia = repetirContrasenia;
    }
    // propiedades conmutadas: (getters y setters)
    set setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    set setDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
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
    get getDireccion() {
        return this.direccion;
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
    mostrarParaAdministrador() {
        document.write(`<ul>
    <li>Nombre: ${this.nombre}</li>
    <li>Direccion:${this.direccion}</li>
    <li>Email:${this.email}</li>
    <li>Contraseña:${this.contrasenia}</li>
    </ul>`);
    }

    mostrarUsuario() {
        document.write(`<ul>
    <li>Nombre: ${this.nombre}</li>
    <li>Direccion:${this.direccion}</li>
    <li>Email:${this.email}</li>
    </ul>`);
    }
}

class Invitado {}
class Administrador {}
