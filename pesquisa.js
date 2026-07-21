const musicas =
JSON.parse(
    localStorage.getItem(
        "musicas"
    )
) || [];

const palavrasBiblicas = {

    "salmos 91":[
        "senhor",
        "refúgio",
        "abrigo",
        "proteção",
        "livramento",
        "asas"
    ],

    "joão 3:16":[
        "amor",
        "deus",
        "filho",
        "vida",
        "eterna"
    ],

    "salmos 23":[
        "pastor",
        "ovelha",
        "vale",
        "mesa",
        "bondade"
    ]

};

document
.getElementById(
    "pesquisar"
)
.addEventListener(
    "click",
    pesquisar
);

function pesquisar(){

    const texto =
    document
    .getElementById(
        "versiculo"
    )
    .value
    .toLowerCase();

    const resultado =
    document
    .getElementById(
        "resultado"
    );

    resultado.innerHTML = "";

    if(
        !palavrasBiblicas[
            texto
        ]
    ){

        resultado.innerHTML =
        `
        <p>
        Versículo não cadastrado.
        </p>
        `;

        return;

    }

    const palavras =
    palavrasBiblicas[
        texto
    ];

    let encontradas =
    [];

    musicas.forEach(
        musica=>{

            let pontos = 0;

            palavras.forEach(
                palavra=>{

                    if(
                        musica.letra
                        .toLowerCase()
                        .includes(
                            palavra
                        )
                    ){

                        pontos++;

                    }

                }
            );

            if(
                pontos > 0
            ){

                encontradas.push({

                    nome:
                    musica.nome,

                    pontos

                });

            }

        }
    );

    encontradas.sort(
        (a,b)=>
        b.pontos -
        a.pontos
    );

    if(
        encontradas.length
        === 0
    ){

        resultado.innerHTML =
        `
        <p>
        Nenhuma música encontrada.
        </p>
        `;

        return;

    }

    encontradas.forEach(
        musica=>{

            resultado.innerHTML +=
            `
            <p>

            ${musica.nome}

            (${musica.pontos}
            pontos)

            </p>
            `;

        }
    );

}