let amigos = [];

function adicionarAmigo() {
    let nomeDigitado = document.getElementById("amigo");
    let nome = nomeDigitado.value;

    if (!nome || nome.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    nomeDigitado.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let nomeSorteado = amigos[indiceSorteado];

        let li = document.createElement("li");
        li.textContent = `Amigo sorteado: ${nomeSorteado}`;
        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        resultado.appendChild(li);
    } else {
        alert("Por favor, insira um nome.");
    }
}

