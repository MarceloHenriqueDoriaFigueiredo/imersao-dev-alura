function Chutar(){
    const numeroSecreto = parseInt(Math.random() * 11);
    const elementoResultado = document.getElementById("resultado");
    const chute = parseInt(document.getElementById("valor").value);
    console.log(chute);

    if(chute === numeroSecreto){
        elementoResultado.innerHTML = "Voce acertou, parabéns."
    }
    else if (chute > 10 || chute < 0){
        elementoResultado.innerHTML = "Voce deve digitar o numero de 0 a 10."
    }
    else{
        elementoResultado.innerHTML = "Numero errado, tente novamente."
    }
}