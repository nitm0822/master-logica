// Dada una cadena de texto, poner en mayuscula la primera letra de
// cada palabra en la cadena y luego devolver la cadena.

// function enMayuscula(texto) {

//     let resultado = "";

//     for (letra in texto) {
//         if (texto[letra - 1] === " " || parseInt(letra) === 0) {
//             resultado += texto[letra].toUpperCase();
//         } else {
//             resultado += texto[letra];
//         }
//     }

//     return resultado;




// }

// console.log(enMayuscula("cadena de prueba"));


// otra forma

function enMayuscula(texto) {
    let palabras = [];
    for (let palabra of texto.split(" ")) {
        palabras.push(palabra[0].toUpperCase() + palabra.slice(1))
    }

    return palabras.join(" ");
}
console.log(enMayuscula("cadena de prueba"));