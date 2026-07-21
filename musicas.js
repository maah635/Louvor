const usuario = JSON.parse(
    localStorage.getItem("usuario")
);

if (!usuario) {
    window.location.href = "index.html";
}

let musicas = JSON.parse(
    localStorage.getItem("musicas")
) || [];

const lista =
    document.getElementById(
        "listaMusicas"
    );

const botaoSalvar =
    document.getElementById(
        "salvar"
    );

botaoSalvar.addEventListener(
    "click",
    adicionarMusica
);

function adicionarMusica() {

    const nome =
        document
        .getElementById("nome")
        .value
        .trim();

    const cantor =
        document
        .getElementById("cantor")
        .value
        .trim();

    const letra =
        document
        .getElementById("letra")
        .value
        .trim();

    if (
        !nome ||
        !cantor
    ) {

        alert(
            "Preencha o nome da música e o cantor."
        );

        return;
    }

    musicas.push({

        nome,
        cantor,
        letra,

        favorita: false,

        erro:
            letra === ""
                ? true
                : false,

        criadoEm:
            new Date()

    });

    localStorage.setItem(
        "musicas",
        JSON.stringify(
            musicas
        )
    );

    alert(
        "Música adicionada com sucesso!"
    );

    document.getElementById(
        "nome"
    ).value = "";

    document.getElementById(
        "cantor"
    ).value = "";

    document.getElementById(
        "letra"
    ).value = "";

    renderizar();
}

function renderizar() {

    lista.innerHTML = "";

    if (
        musicas.length === 0
    ) {

        lista.innerHTML = `
            <p>
                Nenhuma música cadastrada.
            </p>
        `;

        return;
    }

    musicas.sort(
        (a, b) =>
            a.nome.localeCompare(
                b.nome
            )
    );

    musicas.forEach(
        (
            musica,
            index
        ) => {

            lista.innerHTML += `

            <div class="card">

                <h3>
                    ${musica.nome}
                </h3>

                <p>
                    ${musica.cantor}
                </p>

                <p>
                    ${
                        musica.favorita
                            ? "⭐ Favorita"
                            : ""
                    }
                </p>

                <p>
                    ${
                        musica.erro
                            ? "⚠ Letra pendente"
                            : ""
                    }
                </p>

                <button
                onclick="
                favoritar(
                    ${index}
                )
                ">
                    Favoritar
                </button>

                <button
                onclick="
                editar(
                    ${index}
                )
                ">
                    Editar
                </button>

                <button
                onclick="
                excluir(
                    ${index}
                )
                ">
                    Excluir
                </button>

            </div>

            <hr>

            `;
        }
    );
}

window.favoritar =
function (index) {

    musicas[index]
    .favorita =
    !musicas[index]
    .favorita;

    salvar();

};

window.editar =
function (index) {

    const novoNome =
        prompt(
            "Novo nome:",
            musicas[index]
            .nome
        );

    const novoCantor =
        prompt(
            "Novo cantor:",
            musicas[index]
            .cantor
        );

    const novaLetra =
        prompt(
            "Nova letra:",
            musicas[index]
            .letra
        );

    if (
        novoNome
    ) {

        musicas[index]
        .nome =
        novoNome;

    }

    if (
        novoCantor
    ) {

        musicas[index]
        .cantor =
        novoCantor;

    }

    if (
        novaLetra !==
        null
    ) {

        musicas[index]
        .letra =
        novaLetra;

        musicas[index]
        .erro =
        novaLetra === "";

    }

    salvar();

};

window.excluir =
function (index) {

    if (
        confirm(
            "Deseja excluir esta música?"
        )
    ) {

        musicas.splice(
            index,
            1
        );

        salvar();
    }
};

function salvar() {

    localStorage.setItem(
        "musicas",
        JSON.stringify(
            musicas
        )
    );

    renderizar();
}

renderizar();