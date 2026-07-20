export async function buscarBiblia(referencia){

    try{

        const resposta = await fetch(
            `https://bible-api.com/${encodeURIComponent(referencia)}?translation=almeida`
        );

        const dados = await resposta.json();

        if(dados.error){

            return null;

        }

        return {
            referencia:dados.reference,
            texto:dados.text
        };

    }catch(erro){

        console.log(erro);

        return null;

    }

}