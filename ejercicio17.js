// Dado un numero, mostrar los numeros del 1 hasta el numero.
// Pero para multiplos de tres imprimir "buzz" en lugar lugar del numero
// y para los multiplos de cinco imprimir "Lightyear".
// Para multiplos de tres y cinco imprime "BuzzLightyear"

function multiplos(numero) {
    let resultado = "";

    if (numero % 3 === 0 && numero % 5 === 0) {
        resultado = "Buzzlightyear";
    } else if (numero % 3 === 0) {
        resultado = "buzz";
    } else if (numero % 5 === 0) {
        resultado = "Lightyear";
    } else {
        return numero;
    }

    return resultado;

}

function imprimir(numero) {
    for (i = 1; i <= numero; i++) {
        console.log(multiplos(i));

    }
}

imprimir(100);




