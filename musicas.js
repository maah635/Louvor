import {
    db,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from "./firebase.js";

const usuario =
JSON.parse(
    localStorage.getItem(
        "usuario"
    )
);

if (!usuario) {

    window.location.href =
    "index.html";

}

let musicas = [];

const lista =
document.getElementById(
    "listaMusicas"
);

document
.getElementById(
    "salvar"
)
.addEventListener(
    "click",
    adicionarMusica
);

async function adicionarMusica(){

    const nome =
    document
    .getElementById(
        "nome"
    )
    .value
    .trim();

    const cantor =
    document
    .getElementById(
        "cantor"
    )
    .value
    .trim();

    const letra =
    document
    .getElementById(
        "letra"
    )
    .value
    .trim();

    if(
        !nome ||
        !cantor
    ){

        alert(
            "Preencha todos os campos."
        );

        return;

    }

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
            letra,

            favorita:false,

            erro:
            letra === "",

            criadoEm:
            new Date()

        }

    );

    alert(
        "Música adicionada!"
    );

    document.getElementById(
        "nome"
    ).value = "";

    document.getElementById(
        "cantor"
    ).value = "";

    document.getElementById(
        "letra"
    ).value = "";

    carregarMusicas();

}

async function carregarMusicas(){

    musicas = [];

    const query =
    await getDocs(

        collection(
            db,
            "usuarios",
            usuario.email,
            "musicas"
        )

    );

    query.forEach(
        (item)=>{

            musicas.push({

                id:item.id,

                ...item.data()

            });

        }
    );

    renderizar();

}

function renderizar(){

    lista.innerHTML = "";

    if(
        musicas.length === 0
    ){

        lista.innerHTML = `
        <p>
        Nenhuma música cadastrada.
        </p>
        `;

        return;

    }

    musicas.sort(
        (a,b)=>
        a.nome.localeCompare(
            b.nome
        )
    );

    musicas.forEach(
        (
            musica,
            index
        )=>{

            lista.innerHTML += `

            <div class="card">

                <h3>
                    ${musica.nome}
                </h3>

                <p>
                    ${musica.cantor}
                </p>

                <p>
                    ${
                        musica.favorita
                        ? "⭐ Favorita"
                        : ""
                    }
                </p>

                <p>
                    ${
                        musica.erro
                        ? "⚠ Letra pendente"
                        : ""
                    }
                </p>

                <button
                onclick="
                excluir(
                    '${musica.id}'
                )
                ">
                    Excluir
                </button>

            </div>

            <hr>

            `;

        }
    );

}

window.excluir =
async function(id){

    await deleteDoc(

        doc(
            db,
            "usuarios",
            usuario.email,
            "musicas",
            id
        )

    );

    carregarMusicas();

};

carregarMusicas();