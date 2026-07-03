const operacoes = require("./utils/operacoes.js");
const { validar } = require("./utils/validacoes.js")

let numbA = 7;
let numbB = 7;

if(validar(numbA, numbB)) {
    console.log("Resultado da Soma", operacoes.somar(numbA, numbB));
    console.log("Resultado da Subtração", operacoes.subtracao(numbA, numbB));
    console.log("Resultado da Multiplicação", operacoes.multiplicacao(numbA, numbB));
    console.log("Resultado da Divisão", operacoes.divisao(numbA, numbB));
} else {
    console.log("Os valores não são válidos");
}