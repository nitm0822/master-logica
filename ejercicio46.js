// Dado un string, devolver todos los posibles substrings

function todosSubStrings(palabra) {
    let substrings = [];

    for (letra in palabra) {

        let comienzo = letra;

        for (let i = 0; i <= palabra.length; i++) {
            let final = parseInt(i) + parseInt(comienzo);

            substrings.push(palabra.substrings(comienzo, final));
        }
    }

    return substrings;
}

console.log(todosSubStrings("Camila"));

