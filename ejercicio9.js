// Dados dos arrays, devolver un array con solo los elementos comunes entre ambos

function elementosComunes(array1, array2) {

    const filtrado = array1.filter(elemento => {
        return array2.includes(elemento);
    });

    return filtrado;

}

console.log(elementosComunes([8, 7, 6, 9, 10], [10, 1, 2, 3, 6]));

