// Dada una cadena de Texto, devolver cuantas vocales
// (a,e,i,o,u) tiene

function vocales(texto) {
    let coincidencias = texto.match(/[aeiou]/gi);

    return coincidencias ? coincidencias.length : 0;
}


console.log("Numero de vocales:", vocales("victorroblesweb.es"));