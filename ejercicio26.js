// Dado un numero, mostrar su serie de fibonacci.
// La serie de fibonacci es un orden de numeros donde 
// cada numero es la suma de los dos anteriores.

function fibonacci(numero) {

    let serie = [0, 1];

    for (let i = 2; i <= numero; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }

    return [serie, serie[numero]];
}

console.log("Serie completa: ", fibonacci(20)[0]);
console.log("Resultado fib: ", fibonacci(20)[1]);