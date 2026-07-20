export function calcularCompatibilidade(
    textoBiblico,
    letraMusica
){

    const limpar = (texto)=>{

        return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]/g, "")
        .split(" ");

    };

    const biblia =
    limpar(textoBiblico);

    const musica =
    limpar(letraMusica);

    let pontos = 0;

    biblia.forEach((palavra)=>{

        if(
            musica.includes(
                palavra
            )
        ){

            pontos++;

        }

    });

    const score =
    Math.min(
        Math.round(
            (pontos / biblia.length)
            * 100
        ),
        100
    );

    return score;

}