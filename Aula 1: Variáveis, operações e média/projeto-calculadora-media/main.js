function calcular(){
    const n1 = document.getElementById("notaPrimeiroBimestre").value;
    const n2 = document.getElementById("notaSegundoBimestre").value;
    const n3 = document.getElementById("notaTerceiroBimestre").value;
    const n4 = document.getElementById("notaQuartoBimestre").value;
    const resultado = document.getElementById("resultado");
    const media = (Number(n1) + Number(n2) + Number(n3) + Number(n4)) /4;

    resultado.innerHTML = `Sua nota foi: ${media}`;
    if (media >= 6){
        resultado.innerHTML += " Situação aprovado";
    } else if (media < 6){
        resultado.innerHTML += " Situação reprovado"
    }
}