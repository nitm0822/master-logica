// Dado un numero entero, inviertelo y devuelve el nuevo entero

// Ejemplo invertirNumero(67)  //Devuelve: 76

function invertirNumero(numero) {

    let invertido = parseInt(
        numero
            .toString()
            .split('')
            .reverse()
            .join('')
    ) * Math.sign(numero);

    return invertido;
}

console.log("El numero invertido es:", invertirNumero(006));

// Otra forma
function ejercicio09(numero) {
    var salida = 0;

    while (numero > 0) {
        salida = (10 * salida) + (numero % 10);
        numero = Math.floor(numero / 10);
    }

    return salida;
}

console.log(ejercicio09(1245));