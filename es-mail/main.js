'use strict';

// EMAIL INPUT UTENTE
const mailUtente = prompt('Inserisci la tua mail:'); 
// LISTA EMAIL UTENTI AUTORIZZATI
const listaUtenti = ['mario.rossi@gmail.com', 'simone.verdi@gmail.com', 'claudio.neri@gmail.com', 'alice.bianchi@gmail.com'];

// VERIFICO IN CONSOLE I VALORI DELLE COSTANTI SOPRA
// console.log('La e-mail inserita è', mailUtente);
// console.log(listaUtenti);

//CICLO FOR PER CONTROLLARE SE L UTENTE è AUTORIZZATO
for (let i = 0; i < listaUtenti.length; i++) {

  if (listaUtenti[i] === mailUtente) {

    // MOSTRO IL PASSO CORRENTE IN CONSOLE E UN MESSAGGIO PER IL CASO IN CUI L'UTENTE è AUTORIZZATO
    // console.log(i);
    console.log('L utente corrente è autorizzato ad accedere al sito!');
    break;

  } else if (i === listaUtenti.length - 1) {

    // CASO IN CUI ALL'ULTIMA ITERAZIONE NON HO AVUTO CORRISPONDENZA E QUINDI L'UTENTE NON è NELLA LISTA AUTORIZZATI
    // console.log(i);
    console.log('L utente corrente non è autorizzato ad accedere al sito');

  }
}