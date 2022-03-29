const rafa = {
    nome: "Rafa",
    vitorias: 2,
    empates: 2,
    derrotas: 2,
    pontos: 0
};
const paulo = {
    nome: "Paulo",
    vitorias: 3,
    empates: 2,
    derrotas: 2,
    pontos: 2
};
const marcelo = {
    nome: "Marcelo",
    vitorias: 2,
    empates: 3,
    derrotas: 1,
    pontos: 7
};
const gui = {
    nome: "Gui",
    vitorias: 3,
    empates: 1,
    derrotas: 4,
    pontos: 12
}

rafa.pontos = calcularPontos(rafa);
paulo.pontos = calcularPontos(paulo);
marcelo.pontos = calcularPontos(marcelo);
gui.pontos = calcularPontos(gui);

function calcularPontos(jogador){
    const pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}
console.log(rafa);
console.log(paulo);

const jogadores = [rafa, paulo, marcelo, gui];

function exibiJogadoresNaTela(jogadores){
    var elemento = ""
    for (var i = 0; i < jogadores.length; i++){
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}
exibiJogadoresNaTela(jogadores);

function adicionarVitoria(i){
    var jogador = jogadores [i]
    jogador.vitorias++
    jogador.pontos = calcularPontos(jogador)
    exibiJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
    var jogador = jogadores [i]
    jogador.empates++
    jogador.pontos = calcularPontos(jogador)
    exibiJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
    var jogador = jogadores [i]
    jogador.derrotas++
    exibiJogadoresNaTela(jogadores)
}