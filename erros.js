import {
    verificarLogin
} from "./auth.js";

verificarLogin();

const musicasComErro = [

    {
        nome:"Deus do Impossível",
        cantor:"Toque no Altar",
        letra:""
    },

    {
        nome:"Meu Milagre",
        cantor:"Voz da Verdade",
        letra:""
    }

];

renderizarErros();

function renderizarErros(){

    const lista =
    document.getElementById(
        "listaErros"
    );

    lista.innerHTML = "";

    musicasComErro.forEach(
        (musica,index)=>{

            lista.innerHTML += `

            <div class="card">

                <h3>
                    ${musica.nome}
                </h3>

                <p>
                    ${musica.cantor}
                </p>

                <textarea
                    id="letra${index}"
                    placeholder="Cole ou digite a letra aqui..."
                >${musica.letra}</textarea>

                <button
                onclick="salvar(${index})">
                    Salvar Letra
                </button>

            </div>

            `;

        }
    );

}

function salvar(index){

    const letra =
    document.getElementById(
        `letra${index}`
    ).value;

    if(!letra){

        alert(
            "Digite a letra da música."
        );

        return;

    }

    musicasComErro[index].letra =
    letra;

    alert(
        "Letra salva com sucesso!"
    );

    console.log(
        musicasComErro[index]
    );
