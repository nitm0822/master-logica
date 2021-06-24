// Dado un numero, mostrar a cuantos años, meses 
// y dias equivalen. 

function time(days) {

    let years = Math.floor(days / 365);
    let days_remaining = (days % 365);
    let months = Math.floor(days_remaining / 30);
    days_remaining = (days_remaining % 30);

    return `Equals to ${years} years, ${months} months and ${days_remaining} days`
}

console.log(time(765));