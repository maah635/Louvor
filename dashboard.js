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

/* CONTADORES */

const totalMusicas =
musicas.length;

const totalFavoritas =
musicas.filter(
    musica =>
    musica.favorita
).length;

const totalErros =
musicas.filter(
    musica =>
    musica.erro
).length;

document
.getElementById(
    "totalMusicas"
)
.innerText =
totalMusicas;

document
.getElementById(
    "favoritas"
)
.innerText =
totalFavoritas;

document
.getElementById(
    "erros"
)
.innerText =
totalErros;

/* ÚLTIMAS ADICIONADAS */

const lista =
document.getElementById(
    "lista"
);

lista.innerHTML = "";

if (
    musicas.length === 0
) {

    lista.innerHTML =
    `
    <li>
    Nenhuma música adicionada.
    </li>
    `;

} else {

    const ultimas =
    [...musicas]
    .reverse()
    .slice(0, 3);

    ultimas.forEach(
        musica => {

            lista.innerHTML +=
            `
            <li>
                ${musica.nome}
            </li>
            `;

        }
    );

}

/* MENU */

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
    () => {

        menuLateral.classList
        .toggle(
            "ativo"
        );

    }
);

/* FECHAR MENU */

const fechar =
document.getElementById(
    "fecharMenu"
);

fechar.addEventListener(
    "click",
    () => {

        menuLateral.classList
        .remove(
            "ativo"
        );

    }
);

/* SAIR DA CONTA */

document
.getElementById(
    "logout"
)
.addEventListener(
    "click",
    () => {

        localStorage.removeItem(
            "usuario"
        );

        window.location.href =
            "index.html";

    }
);

/* ADICIONAR MÚSICA */

document
.getElementById(
    "adicionar"
)
.addEventListener(
    "click",
    () => {

        window.location.href =
            "musicas.html";

    }
);