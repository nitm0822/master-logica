// Dado un numero, mostrar todos sus numeros divisores.

function mostrarDivisores(numero, posible_divisor) {

    if (numero % posible_divisor === 0) {
        return posible_divisor;
    }
    return 0;


}

function divisores(numero) {
    for (let i = 1; i <= numero; i++) {
        let esDivisor = mostrarDivisores(numero, i);

        if (esDivisor) console.log(esDivisor);
    }
}

divisores(500);