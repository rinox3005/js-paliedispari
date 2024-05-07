'use strict';

//chiedo all'utente tramite prompt una parola o una frase

const userInput = prompt('Enter a word or a phrase. Is it Palindrome?');

//stampo in console l'input utente

console.log('Word or phrase entered by the user:', userInput);

// funzione

function palindromeCheck(string) {

    // converto la stringa in array
    const arrayValues = string.split('');

    console.log(arrayValues);

    // inverto i valori dell'array
    const reverseArrayValues = arrayValues.reverse();

    console.log(reverseArrayValues);

    // riconverto l'array in stringa
    const reverseString = reverseArrayValues.join('');

    console.log(reverseString);

    // controllo se la stringa invertita é uguale all'input utente

    if (string === reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It\'s not a palindrome');
    }

}

// invocazione della funzione

palindromeCheck(userInput);