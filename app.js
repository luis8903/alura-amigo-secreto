let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function VerificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es menor");
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        limpiarCaja();
        intentos++;
    }

    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    return;
}

function condicionalesIniciales() {
    asignarTextoElemento("h1", "Juego Numero Secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    limpiarCaja(); //limpiar caja
    condicionalesIniciales(); //condiciones iniciales
    document.querySelector("#reiniciar").setAttribute("disabled", "true"); //deshabilitar boton
}
function generarNumeroSecreto() {
    let numeroGerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGerado);
    console.log(listaNumeroSorteados);
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros");
    } else {
        if (listaNumeroSorteados.includes(numeroGerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGerado);
            return numeroGerado;
        }
    }

}
condicionalesIniciales();