// Dada una cadena de Texto, comprobar si es un palindromo o no.
// Los palindromos son palabras que se leen igual aun estando invertidas.
// Por ejemplo: ana, bob, otto, allivessevilla

// No tener en cuenta espacios o simbolos raros

function palindromo(texto) {
    let invertido = texto
        .split('')
        .reverse()
        .join('');

    return (invertido === texto);

}

console.log("¿Es un palindromo?" + palindromo("ana"));
