import {
    auth,
    provider,
    signInWithPopup
} from "./firebase.js";

const botao = document.getElementById(
    "googleLogin"
);

botao.addEventListener(
    "click",
    async () => {

        try {

            const resultado =
                await signInWithPopup(
                    auth,
                    provider
                );

            const usuario =
                resultado.user;

            localStorage.setItem(
                "usuario",
                JSON.stringify({
                    nome: usuario.displayName,
                    email: usuario.email,
                    foto: usuario.photoURL
                })
            );

            window.location.href =
                "dashboard.html";

        } catch (erro) {

            console.log(erro);

            alert(
                erro.message
            );

        }

    }
);