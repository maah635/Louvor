const usuario =
JSON.parse(
    localStorage.getItem(
        "usuario"
    )
);

document
.getElementById(
    "nomeUsuario"
)
.innerText =
`Olá, ${usuario.nome}!`;

document
.getElementById(
    "menu"
)
.onclick = ()=>{

    document
    .getElementById(
        "menuLateral"
    )
    .classList
    .add(
        "ativo"
    );

};

document
.getElementById(
    "fechar"
)
.onclick = ()=>{

    document
    .getElementById(
        "menuLateral"
    )
    .classList
    .remove(
        "ativo"
    );

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

document
.getElementById(
    "adicionar"
)
.onclick = ()=>{

    window.location.href =
    "musicas.html";

};