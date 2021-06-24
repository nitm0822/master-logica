// Dados dos numeros, indicar cual es el mayor y cual es el menor

function numeros(numero1, numero2) {

    if (numero1 > numero2) {
        return `El numero mayor es: ${numero1} y el numero menor es: ${numero2}`;

    } else {
        return `El numero mayor es: ${numero2} y el numero menor es: ${numero1}`;



    }

}

console.log(numeros(2, 8));