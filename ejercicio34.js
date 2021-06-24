// Dados dos numeros devolver las operaciones basicas entre ellos. 
// (suma, resta, multiplicacion y división)

function operacionesBasicas(numero1, numero2) {

    let resultado = `Las operaciones basicas entre ${numero1} y ${numero2} son: 
suma = ${numero1 + numero2}
resta = ${numero1 - numero2}
multiplicacion = ${numero1 * numero2}
division = ${numero1 / numero2}
 
`;



    return resultado;
}

console.log(operacionesBasicas(10, 5));
