// Cuanto es el x por ciento de x numero

function tantoPorCiento(porcentaje, numero) {
    let operacion = (numero * (porcentaje / 100))
    let resultado = `El ${porcentaje}% del ${numero} es: ${operacion}`;

    return resultado;

}

console.log(tantoPorCiento(33, 1500));