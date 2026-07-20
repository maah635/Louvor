import {
    verificarLogin
} from "./auth.js";

verificarLogin();

    import {
    calcularCompatibilidade
} from "./ia.js";

import { buscarBiblia } from "./bible.js";

const botao =
document.getElementById("analisar");

botao.addEventListener(
    "click",
    analisar
);

function analisar(){

    const texto =
    document
    .getElementById("textoBiblico")
    .value;

    if(!texto){

        alert(
            "Digite um texto para pesquisar."
        );

        return;

    }

    buscarNaBiblia(texto);

}

async function buscarNaBiblia(texto){

    const resultado =
    await buscarBiblia(texto);

    if(!resultado){

        alert(
            "Referência não encontrada."
        );

        return;

    }

    console.log(
        resultado.referencia
    );

    console.log(
        resultado.texto
    );

    compararMusicas(
        resultado.texto
    );

}

async function compararMusicas(
    textoBiblico
){

    const resultados = [];

    const query =
    await getDocs(

        collection(
            db,
            "usuarios",
            usuario.email,
            "musicas"
        )

    );

    query.forEach((doc)=>{

        const musica =
        doc.data();

        const score =
        calcularCompatibilidade(
            textoBiblico,
            musica.letra || ""
        );

        resultados.push({

            nome:
            musica.nome,

            cantor:
            musica.cantor,

            score

        });

    });

    resultados.sort(
        (a,b)=>
        b.score - a.score
    );

    mostrarResultados(
        resultados
    );

}

}

function mostrarResultados(
    resultados
){

    const lista =
    document.getElementById(
        "listaResultados"
    );

    lista.innerHTML = "";

    resultados.forEach(
        (musica,posicao)=>{

            lista.innerHTML += `

            <div class="item">

                <h3>
                    ${posicao+1}.
                    ${musica.nome}
                </h3>

                <p>
                    ${musica.cantor}
                </p>

                <p class="porcentagem">
                    Compatibilidade:
                    ${musica.score}%
                </p>

            </div>

            `;

        }

    );

}

import {
    db,
    collection,
    getDocs
} from "./firebase.js";

const usuario =
JSON.parse(
    localStorage.getItem(
        "usuario"
    )
);