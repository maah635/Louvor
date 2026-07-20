export function verificarLogin(){

    const usuario =
    JSON.parse(
        localStorage.getItem(
            "usuario"
        )
    );

    if(!usuario){

        window.location.href =
        "index.html";

    }

    return usuario;

}

export function logout(){

    localStorage.removeItem(
        "usuario"
    );

    window.location.href =
    "index.html";

}