# JS - ESERCIZI

## Mail 
Istruzioni:

- Chiedi all’utente la sua email
- Controlla che sia nella lista di chi può accedere
- Stampa un messaggio appropriato sull’esito del controllo

### Mail - Human Code

1. Chiediamo all'utente tramite prompt di inserire la propria mail e salviamo la stringa ricevuta in una costante

2. Creiamo un array di stringhe dove ognuna di queste rappresenta una possibile mail che ha l'autorizzazione ad accedere

3. Apriamo un ciclo for dove la variabile di iterazione scorra gli indici dell'array lista di controllo

4. All'interno del ciclo inseriamo due condizioni:
   - Se il valore della stringa del nostro array lista con indice di iterazione del passo corrente coincide con il valore dato in input dall'utente, allora mostriamo in console un messaggio che dica all'utente che ha l'autorizzazione per accedere e usiamo break per uscire dal ciclo

   - Altrimenti se il passo d'iterazione coincide con l'indice ultimo del nostro array, mostriamo un messaggio che dica all'utente che non è autorizzato ad accedere in quanto entrando in questa condizione l'if sopra non è mai stato true e quindi la mail inserita non è presente nella lista autorizzati

## Gioco dei dadi
Istruzioni:

- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
- Stabilire il vincitore, in base a chi fa il punteggio più alto

### Gioco dei dadi - Human Code

1. Generiamo un numero casuale tra 1 e 6 con Math.random e Math.floor e salviamolo in una costante che rappresenta il punteggio dell'utente

2. Generiamo un numero casuale tra 1 e 6 con Math.random e Math.floor e salviamolo in una costante che rappresenta il punteggio del computer

3. Creiamo le tre possibili condizioni per stabilire il vincitore: 

   - Se il valore dell'utente supera quello del computer, mostriamo in console che l'utente ha vinto

   - Altrimenti se il valore del computer supera quello dell'utente, mostriamo in console che il computer ha vinto

   - Altrimenti rimane come unico esito il pareggio, annunciamolo in console

