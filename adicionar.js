alert("1");

window.onload = () => {

    alert("2");

    const botao =
    document.getElementById(
        "salvar"
    );

    alert(botao);

    botao.onclick = () => {

        alert(
            "Botão funcionando!"
        );

    };

};