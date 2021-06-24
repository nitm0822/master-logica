// Dado un texto y una busqueda, censurar todas las coincidencias 
// de la busqueda en el texto con [-censurado-].

// Si el texo y la busqueda estan vacios mostrar
// "No puedes leer el texto y la busqueda" en el caso 
// de que ambos parámetros no lleguen.

function censurado(texto = false, busqueda = false) {

    let resultado = "";

    if (!texto && !busqueda) {
        resultado = "No puedes leer el texto ni hacer la busqueda";

    } else if (!texto && busqueda) {

        resultado = "No puedes leer el texo";

    } else if (texto && !busqueda) {
        resultado = "No puedes hacer la busqueda";

    } else if (texto && busqueda) {
        resultado = texto.replace(new RegExp(busqueda, 'gi'), '[-CENSURADO-]');
    }

    return resultado;
}

console.log(censurado('Hola perra sucia', 'perra'));