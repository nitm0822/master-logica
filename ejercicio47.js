// Dado array de objetos, devolver cuales son las aficiones
// mas comunes de los usuarios

function aficiones(arrObj) {
    let mapeo = {};

    for (objeto of arrObj) {

        for (aficion of objeto.aficiones) {
            if (!mapeo[aficion]) {
                mapeo[aficion] = 1;
            } else {
                mapeo[aficion]++;
            }
        }
    }
    return mapeo;
}

const usuarios = [
    { nombre: "Victor", aficiones: ["informatica", "cine", "videojuegos"] },
    { nombre: "Juan", aficiones: ["cine", "futbol", "tenis"] },
    { nombre: "Carlos", aficiones: ["informatica", "cine", "surf"] },
    { nombre: "Gonzalo", aficiones: ["informatica", "cine", "videojuegos", "futbol", "surf"] }
];

console.log(aficiones(usuarios));