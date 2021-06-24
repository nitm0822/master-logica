// Dado un número, indicar si es un numero capicúa o no.
// Los números capicúa se leen igual de izquierda a derecha y 
// viceversa.

function capicua(numero) {
    let procesado = parseInt(numero
        .toString()
        .split('')
        .reverse()
        .join('')
    );

    return numero === procesado;
}

console.log(capicua(2002));
console.log(capicua(2002));