window.onload = () => {

    alert("Página carregou!");

    document
        .getElementById("salvar")
        .addEventListener(
            "click",
            () => {

                alert(
                    "CLIQUE DETECTADO!"
                );

            }
        );

};