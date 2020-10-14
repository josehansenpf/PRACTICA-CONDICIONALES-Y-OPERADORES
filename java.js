// 1
alert ("Bienvenidos a mi sitio!")

// 2
let contestar = confirm ("está seguro de querer avanzar")

if (contestar == false) {
    let falseReply = document.querySelector(".practicasubtitulo");
    falseReply.innerHTML = "Lamentamos que no quieras continuar tu visita por este sitio increíble."
}

else {
    let trueReply = document.querySelector (".practicasubtitulo");
    trueReply.innerHTML = "¡Qué alegría que quieras seguir con tu visita por este maravilloso sitio!"
}

let nombre = prompt("Ingrese su nombre");
console.log (nombre);

let bienvenido = document.querySelector (".practica")
bienvenido.innerHTML = "Bienvenido " + nombre;

let edad = prompt("Indique su edad");

let access = document.querySelector ("body");

 if (edad < 18) {
     access.style.display= "none"
 }

let oscuro = confirm ("Desea utilizar el modo oscuro?")
if (oscuro == true) {
    access.style.backgroundColor= "black"
    access.style.color= "white"
}

// 3
let diaDeSemana = "Domingo"
if (diaDeSemana == "Domingo"){
bienvenido.innerHTML= "¡Hoy es día de descanso!"
}