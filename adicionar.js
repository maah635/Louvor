import {
    db,
    collection,
    addDoc
} from "./firebase.js";

document.getElementById("salvar")
.onclick = async () => {

    alert("1");

    try {

        await addDoc(
            collection(db, "teste"),
            {
                nome: "Teste pelo App"
            }
        );

        alert("2");

    } catch (e) {

        alert(e.message);

    }
};