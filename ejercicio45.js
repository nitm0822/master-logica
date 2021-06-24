// Dado un array de alumnos(nombre y nota) mostrar
// cuantos estan reprobados y cuantos estan aprobados

function aprobadosReprobados(alumnos) {

    let aprobados = 0;
    let reprobados = 0;

    for (alumno of alumnos) {
        if (alumno[1] >= 5) {
            aprobados++;
        } else {
            reprobados++;
        }
    }

    return {
        "aprobados": aprobados,
        "reprobados": reprobados
    };
}

console.log(aprobadosReprobados([
    ["Victor", 10],
    ["Juan", 5],
    ["Sebastian", 4],
    ["Camila", 8],
    ["Jesus", 3],
    ["VIsabel", 7],
    ["Samantha", 1]
]));