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

// MENU

document.getElementById(
    "nomeUsuario"
).innerText =
`Olá, ${usuario.nome}!`;

document.getElementById(
    "menu"
).onclick = ()=>{

    document
    .getElementById(
        "menuLateral"
    )
    .classList
    .add(
        "ativo"
    );

};

document.getElementById(
    "fechar"
).onclick = ()=>{

    document
    .getElementById(
        "menuLateral"
    )
    .classList
    .remove(
        "ativo"
    );

};

document.getElementById(
    "logout"
).onclick = ()=>{

    localStorage.clear();

    window.location.href =
    "index.html";

};

// LISTA DE MÚSICAS

let musicas = [];

const lista =
document.getElementById(
    "listaMusicas"
);

// BOTÃO SALVAR

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
            "Preencha o nome e o cantor."
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
            letra === ""

        }

    );

    document
    .getElementById(
        "nome"
    ).value = "";

    document
    .getElementById(
        "cantor"
    ).value = "";

    document
    .getElementById(
        "letra"
    ).value = "";

    carregarMusicas();

}

// CARREGAR

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

// RENDERIZAR

function renderizar(){

    lista.innerHTML = "";

    if(
        musicas.length === 0
    ){

        lista.innerHTML =
        "<p>Nenhuma música cadastrada.</p>";

        return;
    }

    musicas.sort(
        (a,b)=>
        a.nome.localeCompare(
            b.nome
        )
    );

    musicas.forEach(
        (musica)=>{

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
                )">
                    Excluir
                </button>

            </div>

            `;

        }
    );

}

// EXCLUIR

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

// PESQUISA

document
.getElementById(
    "pesquisa"
)
.addEventListener(
    "input",
    (e)=>{

        const valor =
        e.target.value
        .toLowerCase();

        const cards =
        document.querySelectorAll(
            ".card"
        );

        cards.forEach(
            (card)=>{

                if(
                    card.innerText
                    .toLowerCase()
                    .includes(
                        valor
                    )
                ){

                    card.style.display =
                    "block";

                }else{

                    card.style.display =
                    "none";

                }

            }
        );

    }
);

carregarMusicas();