import {
    db,
    collection,
    addDoc
} from "./firebase.js";

const usuario = JSON.parse(
    localStorage.getItem(
        "usuario"
    )
);

if (!usuario) {

    window.location.href =
    "index.html";

}

// NOME

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

menu.onclick = () => {

    menuLateral.classList.add(
        "ativo"
    );

};

document.getElementById(
    "fechar"
).onclick = () => {

    menuLateral.classList.remove(
        "ativo"
    );

};

document.getElementById(
    "logout"
).onclick = () => {

    localStorage.clear();

    window.location.href =
    "index.html";

};

// SALVAR

document.getElementById(
    "salvar"
).onclick =
async () => {

    const nome =
    document
    .getElementById(
        "nome"
    )
    .value;

    const cantor =
    document
    .getElementById(
        "cantor"
    )
    .value;

    const letra =
    document
    .getElementById(
        "letra"
    )
    .value;

    if (!nome || !cantor) {

        alert(
            "Preencha o nome e o cantor."
        );

        return;

    }

    try {

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

                favorita:
                false,

                erro:
                letra === ""

            }

        );

        alert(
            "Música salva com sucesso!"
        );

        document
        .getElementById(
            "nome"
        )
        .value = "";

        document
        .getElementById(
            "cantor"
        )
        .value = "";

        document
        .getElementById(
            "letra"
        )
        .value = "";

    } catch (erro) {

        console.log(
            erro
        );

        alert(
            "Erro ao salvar no Firebase."
        );

    }

};