// Dado un texto comprobar que sea un email valido

function email(texto) {

    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(texto);


}

console.log(email("nitm0822@gmail.com"));