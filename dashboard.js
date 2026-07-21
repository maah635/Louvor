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

const musicas =
JSON.parse(
    localStorage.getItem(
        "musicas"
    )
) || [];

const favoritas =
musicas.filter(
    musica =>
    musica.favorita
);

const erros =
musicas.filter(
    musica =>
    musica.erro
);

document
.getElementById(
    "totalMusicas"
)
.innerText =
musicas.length;

document
.getElementById(
    "favoritas"
)
.innerText =
favoritas.length;

document
.getElementById(
    "erros"
)
.innerText =
erros.length;

const lista =
document.getElementById(
    "lista"
);

lista.innerHTML = "";

if(
    musicas.length === 0
){

    lista.innerHTML =
    "<li>Nenhuma música adicionada.</li>";

}else{

    const ultimas =
    musicas
    .slice(-3)
    .reverse();

    ultimas.forEach(
        musica =>{

            const item =
            document
            .createElement(
                "li"
            );

            item.innerText =
            musica.nome;

            lista.appendChild(
                item
            );

        }
    );

}

document
.getElementById(
    "logout"
)
.addEventListener(
    "click",
    ()=>{

        localStorage.removeItem(
            "usuario"
        );

        window.location.href =
        "index.html";

    }
);

document
.getElementById(
    "adicionar"
)
.addEventListener(
    "click",
    ()=>{

        window.location.href =
        "musicas.html";

    }
);

const menu =
document.getElementById(
    "menu"
);

const menuLateral =
document.getElementById(
    "menuLateral"
);

menu.addEventListener(
    "click",
    ()=>{

        menuLateral.classList
        .toggle(
            "ativo"
        );

    }
);