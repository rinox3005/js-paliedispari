'use strict';

/*L’utente sceglie pari o dispari 
e inserisce un numero da 1 a 5.*/

// inizializzo due variabili per il controllo dell'input utente 

let userEvenOddChoiceRaw;
let userEvenOddChoice;

// con un ciclo do while chiedo all'utente di scegliere tra pari e dispari e controllo che inserisca solo una delle due scelte

do {
    // chiedo all'utente pari o dispari
    userEvenOddChoiceRaw = prompt('Do you choose even or odd?');

    // formatto la scelta per uniformitá di sintassi
    userEvenOddChoice = userEvenOddChoiceRaw.charAt(0).toUpperCase() + userEvenOddChoiceRaw.slice(1).toLowerCase();

    // se l'utente inserisce qualcosa di diverso da pari o dispari lo segnalo con un alert
    if (userEvenOddChoice !== 'Odd' && userEvenOddChoice !== 'Even') {
        alert('ERROR! Enter even or odd!')
    }

    // continuo a chiedere finché non avrá inserito uno dei due valori richiesti
} while (userEvenOddChoice !== 'Odd' && userEvenOddChoice !== 'Even');

//  mostro in console e nel documento il contenuto di userChoice

console.log('The user choice for even and odd is: ', userEvenOddChoice);

// inizializzo una variabile userNumberChoice

let userNumberChoice;

// con un ciclo do while chiedo all'utente un numero compreso tra 1 e 5 controllando che non inserisca valori diversi

do {
    userNumberChoice = Number(prompt('Choose a number between 1 and 5'));

    // controllo che non inserisca qualcosa di diverso da un numero
    if (isNaN(userNumberChoice)) {
        alert('ERROR! Enter a number!');
        // controllo che non inserisca un numero decimale
    } else if (userNumberChoice % 1 !== 0) {
        alert('ERROR! Enter an integer number!');
        // controllo che non inserisca un numero non compreso tra 1 e 5
    } else if (userNumberChoice < 1 || userNumberChoice > 5) {
        alert('ERROR! Enter a valid number!');
    }

    // finché non rispetta tutte queste condizioni continuo a chiedere
} while (userNumberChoice < 1 || userNumberChoice > 5 || isNaN(userNumberChoice) || userNumberChoice % 1 !== 0);

// mostro in console e nel documento il contenuto di userChoice

console.log('The user number of choice is: ', userNumberChoice);


/*Generiamo un numero random (sempre da 1 a 5) 
per il computer (usando una funzione).*/


// creo una funzione che dati due valori min e max mi restituisca un numero randomico generato tra questi due valori (inclusi)
function randoNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max) + min);
}

// creo una variabile, imposto il range di valori e le assegno il risultato della funzione 
const computerNumberChoice = randoNumberGenerator(1, 5);

// stampo in console il risultato della randomizzazione
console.log('The computer number of choice is: ', computerNumberChoice);


/* Sommiamo i due numeri */

const sum = userNumberChoice + computerNumberChoice;

console.log('The sum of the numbers is: ', sum);


/*Stabiliamo se la somma dei 
due numeri è pari o dispari (usando una funzione)*/

function evenOrOdd(number) {

    // inizializzo la variabile result
    let result;

    // controllo pari o dispari
    if (number % 2 === 0) {
        result = 'Even';
    } else {
        result = 'Odd'
    }
    // ritorno il risultato del controllo
    return result;
}

console.log('The resulting number is:', evenOrOdd(sum));


/* Dichiariamo chi ha vinto. */

// se il risultato é pari e l'ultente ha scelto pari, User Wins
if (evenOrOdd(sum) === 'Even' && userEvenOddChoice === 'Even') {

    console.log('Outcome: User Wins');

    // se il risultato é dispari e l'ultente ha scelto dispari, User Wins
} else if (evenOrOdd(sum) === 'Odd' && userEvenOddChoice === 'Odd') {

    console.log('Outcome: User Wins');

    // se nessuno dei casi precedenti si verifica allora, Computer Wins
} else {

    console.log('Outcome: Computer Wins');

}