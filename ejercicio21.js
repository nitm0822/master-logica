// Dada una cadena de texto y un numero, recortar el string
// mostrando los x primeros caracteres.

function recortar(texto, hasta) {
    let resultado = "";

    if (typeof texto === 'string' && typeof hasta === 'number') {
        resultado = texto.substring(0, hasta);
    } else {
        "Introduce los datos correctos";
    }

    return resultado;

}

console.log(recortar("Cursos Desarrollo Web", 15));