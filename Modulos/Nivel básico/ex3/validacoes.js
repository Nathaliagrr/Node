function validarNome(nome) {
    if (nome >= 3) {
        console.log("Nome valido!", nome);
    } else {
        console.log("Seu nome precisa ter 3 caracteres");
    }
}

function validarIdade(idade) {
    if (idade >= 0) {
    console.log("Idade valida!", idade);
    } else {
        console.log("Idade invalida!");
    } 
}


module.exports = {
    validarNome,
    validarIdade
};