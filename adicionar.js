// adicionar.js
import {
  db,
  collection,
  addDoc
} from "./firebase.js";

const botao = document.getElementById("salvar");

botao.addEventListener("click", async () => {

    alert("1");

    const nome = document.getElementById("nome").value;
    const cantor = document.getElementById("cantor").value;
    const letra = document.getElementById("letra").value;

    if (!nome || !cantor) {
        alert("Preencha os campos");
        return;
    }

    try {

        alert("2");

        await addDoc(collection(db, "musicas"), {
            nome,
            cantor,
            letra
        });

        alert("3 - SALVOU!");

    } catch (erro) {

        alert("ERRO:");
        alert(erro.message);

    }

});