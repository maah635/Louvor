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

            alert("2");

            const resposta =
            await addDoc(

                collection(
                    db,
                    "teste"
                ),

                {
                    nome:"Teste"
                }

            );

            alert("3");

            console.log(
                resposta.id
            );

        }catch(e){

            alert(
                "ERRO:"
                + e.message
            );

        }

    };

};