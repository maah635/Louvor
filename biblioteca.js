const usuario =
JSON.parse(
    localStorage.getItem(
        "usuario"
    )
);

if(!usuario){

    window.location.href =
    "index.html";

}

document
.getElementById(
    "nomeUsuario"
)
.innerText =
`Olá, ${usuario.nome}!`;

// MENU

const menu =
document.getElementById(
    "menu"
);

const menuLateral =
document.getElementById(
    "menuLateral"
);

menu.onclick = ()=>{

    menuLateral.classList
    .add("ativo");

};

document
.getElementById(
    "fechar"
)
.onclick = ()=>{

    menuLateral.classList
    .remove("ativo");

};

document
.getElementById(
    "logout"
)
.onclick = ()=>{

    localStorage.clear();

    window.location.href =
    "index.html";

};