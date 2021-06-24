// Dado un array de numeros, devolver un array nuevo con
// los numeros pares e impares separados

function pares(numeros) {

    return {
        pares: numeros.filter(num => num % 2 === 0),
        impares: numeros.filter(num => num % 2 !== 0)
    };
}

console.log(pares([1, 2, 3, 5, 8, 196, 44, 58]));