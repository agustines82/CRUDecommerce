import { Administrador } from "./classesDeUsuarios.js";

let agustin = new Administrador("Agustin", "agustines82@gmail.com", "As123456", "As123456");
let lucia = new Administrador("Lucia", "lucia@gmail.com", "Lg123456", "Lg123456");
let tomas = new Administrador("Tomas", "tomasgabriel1999@hotmail.com", "Tl123456", "Tl123456");
let yessica = new Administrador("Yessica", "yessi48206@gmail.com", "Yj123456", "Yj123456");

export let listadoAdiministradores = [agustin, lucia, tomas, yessica];
export let listadoEmailAdmin = ["agustines82@gmail.com", "lucia@gmail.com", "tomasgabriel1999@hotmail.com", "yessi48206@gmail.com"];
