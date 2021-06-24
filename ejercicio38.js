// Dado un numero, mostrar listado de los cuadrados
// de todos los numeros naturales hasta llegar al mismo.

function mostrarCuadrados(numero) {

    let resultado = "";

    for (let i = 1; i <= numero; i++) {
        if (i <= numero) {
            resultado += (i * i) + "\n";
        }
    }

    return resultado;
}

console.log(mostrarCuadrados(30));