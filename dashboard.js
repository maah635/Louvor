import {
    verificarLogin,
    logout
} from "./auth.js";

const usuario =
verificarLogin();

const musicas = 4285;
const favoritas = 84;
const erros = 3;

document.getElementById("totalMusicas").innerText =
musicas;

document.getElementById("favoritas").innerText =
favoritas;

document.getElementById("erros").innerText =
erros;

document
.getElementById("adicionar")
.addEventListener("click", ()=>{

    window.location.href =
    "musicas.html";

});

const usuario =
JSON.parse(
    localStorage.getItem(
        "usuario"
    )
);

if(usuario){

    document.querySelector(
        "h1"
    ).innerText =
    `Olá, ${usuario.nome}!`;

}

document
.getElementById("logout")
.addEventListener(
    "click",
    logout
);