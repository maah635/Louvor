import {
    db,
    collection,
    addDoc
} from "./firebase.js";

window.onload = () => {

    const botao = document.getElementById("salvar");

    botao.addEventListener("click", async () => {

        const nome = document.getElementById("nome").value;
        const cantor = document.getElementById("cantor").value;
        const letra = document.getElementById("letra").value;

        if (!nome || !cantor) {
            alert("Preencha o nome da música e o cantor.");
            return;
        }

        try {

            await addDoc(
                collection(db, "musicas"),
                {
                    nome: nome,
                    cantor: cantor,
                    letra: letra,
                    criadaEm: new Date()
                }
            );

            alert("Música salva com sucesso!");

            document.getElementById("nome").value = "";
            document.getElementById("cantor").value = "";
            document.getElementById("letra").value = "";

        } catch (erro) {

            console.log(erro);

            alert(
                "Erro ao salvar:\n\n" +
                erro.message
            );

        }

    });

};