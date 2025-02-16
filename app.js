// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
function agregarAmigo() {
    let amigo_ingresado = document.getElementById("amigo").value;
    if (amigo_ingresado === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(amigo_ingresado);
        limpiarCaja();
        listarAmigos();
    }
    return;
}

function listarAmigos() {
    limpiarElementoPorID("listaAmigos");
    let listadoAmigos = "";

    for (let amigo in amigos) {
        listadoAmigos = listadoAmigos + "<li>" + amigos[amigo] + "</li>";
    }
    devolverObjetoElem("listaAmigos").innerHTML = listadoAmigos;
    return;
}
function limpiarCaja() {
    document.querySelector("#amigo").value = "";
    return;
}
function sortearAmigo() {
    limpiarElementoPorID("resultado");
    let indexAmigo = Math.floor(Math.random() * amigos.length - 1) + 1;
    let objListaResultado = devolverObjetoElem("resultado");
    objListaResultado.innerHTML = "Tu amigo secreto es: " + amigos[indexAmigo];
}

function limpiarElementoPorID(idElemento) {
    devolverObjetoElem(idElemento).innerHTML = "";
    return;
}

function devolverObjetoElem(idElemento) {
    let objLista = document.querySelector("#" + idElemento);
    return objLista;
}