// Dado un array, dividirlo en tantos sub-arrays
// como sea necesario basandonos en un numero que indique
// su tamaño.

function divideArrays(array_principal, numero_elementos) {

    let arreglos = [];

    for (let elemento of array_principal) {

        let ultimo = arreglos[arreglos.length - 1];

        if (!ultimo || ultimo.length === numero_elementos) {
            arreglos.push([elemento]);
        } else {
            ultimo.push(elemento);
        }
    }

    return arreglos;
}

console.log(divideArrays([7, 8, 9, 10, 5, 8, 9, 10, 20, 15], 4));