// Dada una cadena de Texto, darle la vuelta e invertir el orden de sus
// caracteres, sin usar metodos propios del lenguaje, solo estructuras de control

function invertir(texto) {
    let invertido = "";

    for (let letra of texto) {
        invertido = letra + invertido;
    }

    return invertido;
}

// function invertir(texto) {
//     return texto.split("").reverse().join("");
// }

console.log("texto invertido: ", invertir("ariana"))