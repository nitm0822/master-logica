// Dado un array de numeros, devolver el valor mas bajo y el valor mas alto.

function altoBajo(numeros) {

    let ordenados = numeros.sort((a, b) => a - b);

    return {
        bajo: ordenados[0],
        alto: ordenados[ordenados.length - 1]
    };
}

console.log(altoBajo([88, 100, 50, 69, 35, 10, 250, 890, 950, 500, 650]));