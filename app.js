
let amigos = [];

function TextoInput (tag , texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

function adicionarAmigo() {
    
    
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();

    
    if (nomeAmigo === "") {
        TextoInput('h2' , 'Insira um nome!');
    }
    else if (nomeAmigo.length <= 3)  {
        TextoInput('h2' , 'Escreva um nome válido!');
        inputAmigo.value = "";
        return;
    }    
    else if (nomeAmigo.length > 3)  {
            TextoInput('h2', 'Insira mais um nome, se quiser!');    
    }  
    amigos.push(nomeAmigo);

    
    inputAmigo.value = "";

    
    atualizarListaAmigos();

    }


function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');


    listaAmigos.innerHTML = "";


    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
   
    });
}
function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("Por favor, adicione pelo menos um amigo antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}