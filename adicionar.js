import {
    db,
    collection,
    addDoc
} from "./firebase.js";

window.onload = ()=>{

    document
    .getElementById("salvar")
    .onclick =
    async ()=>{

        alert("1");

        await addDoc(
            collection(
                db,
                "teste"
            ),
            {
                nome:"Teste"
            }
        );

        alert("2");

    };

};