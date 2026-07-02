function boasVindas(nome) {
    console.log("Boas vindas", nome);
    return nome;
}

function despedida(nome) {
    console.log("Tchau", nome);
    return nome;
}

module.exports = {
    boasVindas,
    despedida
};