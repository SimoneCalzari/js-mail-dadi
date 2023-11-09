'use strict';

// SALVO I VALORI OTTENUTI DA UTENTE E COMPUTER IN DUE COSTANTI
const dadoUtente = Math.floor(Math.random() * 6 ) + 1;
const dadoComputer = Math.floor(Math.random() * 6 ) + 1;

// MOSTRIAMO IN CONSOLE I VALORI DEI DUE LANCI 
console.log('L utente ha fatto:', dadoUtente);
console.log('Il computer ha fatto:', dadoComputer);

// ISTRUZIONI CONDIZIONALI PER STABILIRE IL VINCITORE
if (dadoUtente > dadoComputer) {

  console.log('L utente ha vinto');

} else if (dadoComputer > dadoUtente) {

  console.log('Il computer vince');

} else {

  console.log('Utente e computer hanno pareggiato');

}