const carta1 = {
    nome: "Bulbasauro",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};
const carta2 = {
    nome: "Dart Vader",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};
const carta3 = {
    nome: "Shiryu de dragão",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};
const carta4 = {
    nome: "Dragonnite",
    atributos: {
        ataque: 6,
        defesa: 7,
        magia:8
    }
};
const carta5 = {
    nome: "Iron man",
    atributos: {
        ataque: 9,
        defesa: 7,
        magia: 1
    }
}
const carta6 = {
    nome: "Thanos",
    atributos: {
        ataque: 9,
        defesa: 9,
        magia: 9
    }
}
const carta7 = {
    nome: "Homem aranha",
    atributos: {
        ataque: 6,
        defesa: 7,
        magia: 5
    }
}
const carta8 = {
    nome: "Hulk",
    atributos: {
        ataque: 9,
        defesa: 9,
        magia: 1
    }
}
const carta9 = {
    nome: "Super man",
    atributos: {
        ataque: 10,
        defesa: 10,
        magia: 9
    }
}
const carta10 = {
    nome: "Ben 10",
    atributos: {
        ataque: 8,
        defesa: 7,
        magia: 3
    }
}
const carta11 = {
    nome: "Lanterna verde",
    atributos: {
        ataque: 9,
        defesa: 5,
        magia: 10
    }
}
const carta12 = {
    nome: "Flash",
    atributos: {
        ataque: 8,
        defesa: 7,
        magia: 7
    }
}
const carta13 = {
    nome: "Mulher maravilha",
    atributos: {
        ataque: 10,
        defesa: 9,
        magia: 9
    }
}
const carta14 = {
    nome: "Thor",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 10
    }
}
const carta15 = {
    nome: "Batman",
    atributos: {
        ataque: 8,
        defesa: 8,
        magia: 6
    }
}
const carta16 = {
    nome: "Capitã marvel",
    atributos: {
        ataque: 9,
        defesa: 9,
        magia: 9
    }
}
const carta17 = {
    nome: "Odin",
    atributos: {
        ataque: 10,
        defesa: 9,
        magia: 10
    }
}
const carta18 = {
    nome: "Destruidor",
    atributos: {
        ataque: 8,
        defesa: 8,
        magia: 3
    }
}
const carta19 = {
    nome: "Viuva negra",
    atributos: {
        ataque: 8,
        defesa: 8,
        magia: 9
    }
}
const carta20 = {
    nome: "Galactus",
    atributos: {
        ataque: 10,
        defesa: 10,
        magia: 10
    }
}
const cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14, carta15, carta16, carta17, carta18, carta19, carta20];
var cartaMaquina;
var cartaJogador;

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 20)
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);

    var numeroCartaJogador = parseInt(Math.random() * 20)
    while (numeroCartaMaquina == numeroCartaJogador){
        numeroCartaJogador = parseInt(Math.random() * 20)
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;   
    exibirOpcoes()
}

function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos){
        opcoesTexto +=
         "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributosSelecionados(){
    var radioAtributos = document.getElementsByName("atributo");
    
    for (var i = 0; i < radioAtributos.length; i++){
        if (radioAtributos[i].checked == true){
            return radioAtributos[i].value;
        }
    }
}

function jogar(){
    var atributoSelecionado = obtemAtributosSelecionados()
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina){
        elementoResultado.innerHTML = "Você venceu";
    } else if (valorCartaMaquina > valorCartaJogador){
        elementoResultado.innerHTML = "Voce perdeu, a carta da maquina e maior";
    } else {
        elementoResultado.innerHTML = "Empatou";
    }
    console.log(cartaMaquina);
}