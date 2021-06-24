// Dado un texto devolver cuantas consonantes y
// cuantas vocales tiene 

function contardorLetras(texto) {
    let vocales = texto.replace(/[^aáAÁeéEÉiíIÍoOóÓuúUÚ]/gi, '').length;
    let consonantes = texto.replace(/[0-9" "./aáAÁeéEÉiíIÍoOóÓuúUÚ]/gi, '').length;

    let resultado = `El numero de vocales es: ${vocales} y el numero de consonantes es: ${consonantes}`;

    return resultado;
}


console.log(contardorLetras("victorrobles25.web.es"));