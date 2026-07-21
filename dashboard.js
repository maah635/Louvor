const usuario = JSON.parse(
    localStorage.getItem("usuario")
);

if (!usuario) {
    window.location.href = "index.html";
}

// Nome do usuário
document.getElementById(
    "nomeUsuario"
).innerText =
`Olá, ${usuario.nome}!`;

// ABRIR MENU

const menu =
document.getElementById("menu");

const menuLateral =
document.getElementById("menuLateral");

menu.addEventListener(
    "click",
    ()=>{

        menuLateral.classList.add(
            "ativo"
        );

    }
);

// FECHAR MENU

document.getElementById(
    "fechar"
).addEventListener(
    "click",
    ()=>{

        menuLateral.classList.remove(
            "ativo"
        );

    }
);

// SAIR DA CONTA

document.getElementById(
    "logout"
).addEventListener(
    "click",
    ()=>{

        localStorage.clear();

        window.location.href =
        "index.html";

    }
);

// BOTÃO ADICIONAR

document.getElementById(
    "adicionar"
).addEventListener(
    "click",
    ()=>{

        window.location.href =
        "adicionar.html";

    }
);

// DADOS TEMPORÁRIOS
// Depois vamos trocar pelo Firebase

document.getElementById(
    "totalMusicas"
).innerText = "0";

document.getElementById(
    "totalFavoritas"
).innerText = "0";

document.getElementById(
    "totalErros"
).innerText = "0";