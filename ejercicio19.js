// Dado un array de objetos de peliculas (titulo, director, vista)
// mostrar todas las peliculas indicando cual has visto y cual no.

const peliculas = [
    {

        titulo: "El señor de los anillos",
        director: "Peter Jackson",
        vista: true
    },
    {

        titulo: "La Liga de la justicia",
        director: "Zack Snyder",
        vista: false
    },
    {

        titulo: "Los Vengadores: Endgame",
        director: "Joe Russo",
        vista: true
    },
    {

        titulo: "Batman vs Superman",
        director: "Zack Snyder",
        vista: false
    }
];



function peliculasVistas(peliculas) {
    for (pelicula of peliculas) {


        if (pelicula.vista === true) {
            console.log(`He visto ${pelicula.titulo} de ${pelicula.director}`);
        } else {
            console.log(`No he visto ${pelicula.titulo} de ${pelicula.director}`);

        }
    }

    return peliculas;

}
peliculasVistas(peliculas);

