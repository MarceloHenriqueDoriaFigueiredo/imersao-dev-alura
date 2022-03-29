function Converter(){
    const valorElemento = document.getElementById("valor");
    const valor = valorElemento.value;
    const valorEmDolar = parseFloat(valor);
    console.log(valorEmDolar);

    // Calculo
    const valorEmReal = valorEmDolar * 5;
    console.log(valorEmReal);

    // Imprimido na tela
    const elementoValorConvertido = document.getElementById("valorConvertido");
    const valorConvertido = "O resultado em real e: R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}