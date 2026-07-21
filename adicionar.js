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

        try{

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

        }catch(e){

            alert(
                "ERRO:\n\n" +
                e.message
            );

            console.log(e);

        }

    };

};