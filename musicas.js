const usuario = JSON.parse(
    localStorage.getItem(
        "usuario"
    )
);

if (!usuario) {

    window.location.href =
        "index.html";

}

let musicas = JSON.parse(
    localStorage.getItem(
        "musicas"
    )
) || [];

const lista = document.getElementById(
    "listaMusicas"
);

document
.getElementById(
    "salvar"
)
.addEventListener(
    "click",
    adicionarMusica
);

function adicionarMusica() {

    const nome =
        document
        .getElementById(
            "nome"
        )
        .value
        .trim();

    const cantor =
        document
        .getElementById(
            "cantor"
        )
        .value
        .trim();

    if (!nome || !cantor) {

        alert(
            "Preencha todos os campos."
        );

        return;

    }

    musicas.push({

        nome,
        cantor,
        favorita: false,
        erro: false

    });

    localStorage.setItem(
        "musicas",
        JSON.stringify(
            musicas
        )
    );

    alert(
        "Música adicionada!"
    );

    document.getElementById(
        "nome"
    ).value = "";

    document.getElementById(
        "cantor"
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

    musicas
    .sort(
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

                <button
                onclick="
                excluir(${index})
                ">
                    Excluir
                </button>

            </div>

            `;

        }
    );

}

window.excluir =
function (index) {

    musicas.splice(
        index,
        1
    );

    localStorage.setItem(
        "musicas",
        JSON.stringify(
            musicas
        )
    );

    renderizar();

};

renderizar();