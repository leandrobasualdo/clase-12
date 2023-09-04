//Funcion

let nombre = "";

function Saludar(nombre) {
    nombre.push(prompt("Ingrese su nombre"));
    console.log("Bienvenido:" + nombre);
}

Saludar(nombre);
