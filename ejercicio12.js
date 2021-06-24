// Dado un numero mostrar todos los numeros desde ese al cero de 8
// en 8 en una lista con guiones y cada numero debe empezar por n°.

function hastaCero(numero) {

    let resultado = `--- Del ${numero} al 0 --- \n`;

    while (numero >= 0) {

        resultado += `- n° ${numero} \n`;

        numero -= 8;
    }

    if (numero < 8) {
        resultado += "-n° 0 \n";
    }

    resultado += "---FIN---";

    return resultado;
}

console.log(hastaCero(6));