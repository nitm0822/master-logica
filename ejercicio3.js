// Dada una palabra,buscarla en una frase y devolver cuantas veces aparace en ella.
// La frase y la palabra deben ser parametros en una funcion

function coincidencias(frase, busqueda) {
    let resultado = 0;

    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, '');


    if (texto_limpio.includes(busqueda)) {

        let palabras = texto_limpio.split(" ");
        let mapa = {};

        for (let palabra of palabras) {

            if (mapa[palabra]) {
                mapa[palabra]++;
            } else {
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[busqueda];



    } else {
        resultado = 0;
    }

    return resultado;

}
console.log(
    "Numero de coincidencias en la frase:",

    coincidencias('Hola, que tal, soy Nitza Martinez martinez martinez', "martinez")
    // coincidencias('Esta es mi frase', "camila")

);