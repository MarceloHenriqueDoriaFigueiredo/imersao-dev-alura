function adicionarFilme(){
    const campoFilmeFavorito = document.getElementById("filme").value;
    if (campoFilmeFavorito.endsWith(".jpg") || (campoFilmeFavorito.endsWith(".png"))){
        listFilmesnaTela(campoFilmeFavorito);
    } else  {
        console.error("Endereço de filme invalido")
    }
    

    document.getElementById("filme").value = "";
}

function listFilmesnaTela(campoFilmeFavorito) {
    console.log(campoFilmeFavorito);
    const elementoFilmeFavorito = "<img src= " + campoFilmeFavorito + ">";
    const elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}