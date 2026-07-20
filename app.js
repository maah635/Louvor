console.log("APP FUNCIONANDO");

const botao = document.getElementById(
    "googleLogin"
);

console.log(botao);

botao.addEventListener(
    "click",
    ()=>{
        alert("FUNCIONOU!");
    }
);