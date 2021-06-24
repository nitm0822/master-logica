// Dados dos numeros, devolver cuantos números IMPARES hay en ellos

function numerosImpares(x, y) {

    let contador = 0;

    while (x < y) {

        if (x % 2 !== 0) contador++;

        x++;
    }
    return contador;
}

console.log("Numeros impares:", numerosImpares(1, 100));
