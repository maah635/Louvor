import {
    verificarLogin
} from "./auth.js";

verificarLogin();

import {
    db,
    collection,
    addDoc,
    getDocs
} from "./firebase.js";

const usuario =
JSON.parse(
    localStorage.getItem(
        "usuario"
    )
);

let musicas = [];

const lista = document.getElementById("listaMusicas");

document
.getElementById("salvar")
.addEventListener("click", adicionarMusica);

async function adicionarMusica(){

    const nome =
    document.getElementById(
        "nome"
    ).value;

    const cantor =
    document.getElementById(
        "cantor"
    ).value;

    if(!nome || !cantor){

        alert(
            "Preencha todos os campos."
        );

        return;

    }

    try{

        await addDoc(

            collection(
                db,
                "usuarios",
                usuario.email,
                "musicas"
            ),

            {
                nome,
                cantor,
                letra:"",
                favorita:false,
                erro:false,
                criadoEm:
                new Date()
            }

        );

        alert(
            "Música adicionada!"
        );

        carregarMusicas();

    }catch(erro){

        console.log(
            erro
        );

        alert(
            "Erro ao salvar."
        );

    }

}

function editar(index){

    const novoNome =
    prompt(
        "Novo nome:",
        musicas[index].nome
    );

    const novoCantor =
    prompt(
        "Novo cantor:",
        musicas[index].cantor
    );

    if(novoNome){

        musicas[index].nome =
        novoNome;

    }

    if(novoCantor){

        musicas[index].cantor =
        novoCantor;

    }

    ordenar();
    renderizar <h3>
    
    ${musica.nome}
</h3>

<p>
    ${musica.cantor}
</p>

<small>
    ID: ${musica.id}
</small>

}

async function carregarMusicas(){

    const query =
    await getDocs(

        collection(
            db,
            "usuarios",
            usuario.email,
            "musicas"
        )

    );

    musicas = [];

    query.forEach((doc)=>{

        musicas.push({

            id:doc.id,

            ...doc.data()

        });

    });

    ordenar();
    renderizar <h3>
    ${musica.nome}
</h3>

<p>
    ${musica.cantor}
</p>

<small>
    ID: ${musica.id}
</small>

}

carregarMusicas();