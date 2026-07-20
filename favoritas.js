import {
    verificarLogin
} from "./auth.js";

verificarLogin();

const favoritas = [

    {
        nome:"Aquieta Minh'Alma",
        cantor:"Ministério Zoe"
    },

    {
        nome:"Deus de Promessas",
        cantor:"Davi Sacer"
    },

    {
        nome:"Não Pare",
        cantor:"Midian Lima"
    }

];

renderizar();

function renderizar(){

    const lista =
    document.getElementById(
        "listaFavoritas"
    );

    lista.innerHTML = "";

    favoritas.forEach(
        (musica,index)=>{

            lista.innerHTML += `

            <div class="card">

                <h3>
                    ★ ${musica.nome}
                </h3>

                <p>
                    ${musica.cantor}
                </p>

                <button
                onclick="remover(${index})">

                    Remover dos Favoritos

                </button>

            </div>

            `;

        }
    );

}

function remover(index){

    const confirmar =
    confirm(
        "Remover dos favoritos?"
    );

    if(confirmar){

        favoritas.splice(
            index,
            1
        );

        renderizar();

    }

}