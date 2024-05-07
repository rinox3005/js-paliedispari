'use strict';

/*L’utente sceglie pari o dispari 
e inserisce un numero da 1 a 5.*/

// definisco una variabile con il valore di un prompt che chiede pari o dispari pari/dispari

const userEvenOddChoice = prompt('Do you choose even or odd?');

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

// invoco la funzione e imposto i valori
randoNumberGenerator(1, 5);

// creo una variabile e le assegno il risultato della funzione 
const computerNumberChoice = randoNumberGenerator(1, 5);

// stampo in console il risultato della randomizzazione
console.log('The computer number of choice is: ', computerNumberChoice);


/* Sommiamo i due numeri */

const sum = userNumberChoice + computerNumberChoice;

console.log('The result is: ', sum);
