// Dado un array de numeros, sacar la media de todos ellos

function obtenerMedia(numeros) {

    let suma = numeros.reduce((valorAcumulado, numeroActual) => {
        return valorAcumulado + numeroActual;
    });

    let media = suma / numeros.length;

    return media;


}

console.log(obtenerMedia([1, 2, 3, 4, 5, 6, 30, 50, 80]));