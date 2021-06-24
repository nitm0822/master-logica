// Dados dos numeros, sacar un numero aleatorio entre ellos

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min; // tambien puede ser Math.floor o ceil
}

console.log(getRandomInt(100, 300));