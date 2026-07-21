alert("1");

const usuario = JSON.parse(
    localStorage.getItem(
        "usuario"
    )
);

alert("2");

document.getElementById(
    "nomeUsuario"
).innerText =
`Olá, ${usuario.nome}!`;

alert("3");

document.getElementById(
    "salvar"
).onclick = ()=>{

    alert(
        "Botão funcionando!"
    );

};