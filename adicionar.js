import {
    db,
    collection,
    addDoc
} from "./firebase.js";

document
.getElementById("salvar")
.onclick =
async ()=>{

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

        alert(
            "Salvou!"
        );

    }catch(erro){

        alert(
            erro.message
        );

        console.log(
            erro
        );

    }

};