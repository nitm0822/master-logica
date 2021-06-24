// Dado un string y un numero repetir el string
// tantas veces como el numero indique

// Funcion clasica
function repetir(texto, numero_repeticiones) {

    let repeticiones = "";

    for (i = 0; i < numero_repeticiones; i++) {
        repeticiones += texto + " ";
    }
    return repeticiones;

}

console.log(repetir("Nitza", 10));


// Funcion prototipo

String.prototype.repetir = function (numero_repeticiones) {
    let repeticiones = "";

    for (i = 0; i < numero_repeticiones; i++) {
        repeticiones += this;
    }

    return repeticiones;
}

console.log(repetir("Nitza", 5));