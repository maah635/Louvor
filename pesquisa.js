const usuario = JSON.parse(
    localStorage.getItem(
        "usuario"
    )
);

if(!usuario){

    window.location.href =
    "index.html";

}

document.getElementById(
    "nomeUsuario"
).innerText =
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

    menuLateral.classList.add(
        "ativo"
    );

};

document.getElementById(
    "fechar"
).onclick = ()=>{

    menuLateral.classList.remove(
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

// PESQUISA

document.getElementById(
    "pesquisar"
).onclick = ()=>{

    const texto =
    document.getElementById(
        "versiculo"
    ).value;

    document.getElementById(
        "resultado"
    ).innerHTML = `

        <div class="card">

            <h3>
                Pesquisa:
            </h3>

            <p>
                ${texto}
            </p>

            <p>
                Em breve, o LouvorMatch irá procurar músicas relacionadas automaticamente.
            </p>

        </div>

    `;

};