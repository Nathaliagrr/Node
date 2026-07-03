function validar(a, b) {
    let numbA = Number(a);
    let numbB = Number(b);

    return !Number.isNaN(numbA) && !Number.isNaN(numbB);
}

module.exports = {
    validar
};