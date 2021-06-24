// Dado un array de números, devolver el array sin elementos 
// duplicados.

function eliminarDuplicados(elementos) {

    elementos = elementos.filter(elemento => {
        return typeof elemento === "number";
    });

    let sin_duplicado = new Set(elementos);

    return Array.from(sin_duplicado);

}

console.log(eliminarDuplicados(["uno", "dos", 1, 2, 2, 3, 3, 1, 4, "hola"]));