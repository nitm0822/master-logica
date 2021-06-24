// Dado un array crear otro con el primer y ultimo elemento del array original

function primeroUltimo(elemento) {
    let nuevo_elemento = [];
    nuevo_elemento.push(elemento[0], elemento[elemento.length - 1]);

    return nuevo_elemento;
}

console.log(primeroUltimo([100, 200, 300, 700]));