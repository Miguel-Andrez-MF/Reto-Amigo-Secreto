// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


//Funcion para vaciar el campo de texto
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

//Funcion para agregar un amigo a la lista
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    
    if (nombreAmigo === '') {
        alert('Debes ingresar un nombre');
        return;
    } 
    //Si el amigo ya fue ingresado 
    if (amigos.includes(nombreAmigo)) {
        alert('El amigo ya fue ingresado');
        return;
    }  

    //Finalmente se agrega el amigo, se limpia el campo y se muestra la lista
    amigos.push(nombreAmigo);
    limpiarCaja();
    mostrarAmigos();
}

//Funcion para mostrar la lista de amigos
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i=0; i < amigos.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        lista.appendChild(elementoLista);
    }
    console.log(amigos);
}


//Funcion para sortear un amigo
function sortearAmigo() {
    // Si la lista esta vacia
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }  
    numeroAleatorio = Math.floor(Math.random() * amigos.length);
    console.log(numeroAleatorio);
    let amigoSorteado = amigos[numeroAleatorio];
    document.getElementById('resultado').textContent = amigoSorteado;
}


