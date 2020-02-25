/* SCOPO DEL GIOCO:
Il computer deve generare 16 numeri casuali tra 1 e 100.
In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */



// creo un array bombe con 16 numeri random (math floor e math random);
// uso l'includes per l'array bombe, così pusho solo i numeri che non sono ancora nell'array (evito i doppioni);
// prompt che chiede all'utente di inserire un numero da 1 a 100... per un massimo di 84 volte. 
// se il numero che esce è incluso nell'array bombe, la partita finisce. 
// se il giocatore riesce a inserire 84 numeri che non siano bombe, vince. 
// far sapere all'utente quante volte il suo numero faceva parte della lista bombe e quante volte era un numero buono per andare avanti col gioco. 


var arrayBombe = [];
var numeroCasuale = Math.floor(Math.random() * 100 + 1);
var numeroTentativiUtente = 84;  // --> nota: se  numeroTentativiUtente + lunghezza arrayBombe === 100... l'utente ha vinto.  
var arrayNumeriOk = [];

while (arrayBombe.length < 16) {
    var numeroCasuale = Math.floor(Math.random() * 100 + 1);
    if (!arrayBombe.includes(numeroCasuale)) {
        arrayBombe.push(numeroCasuale);
    }
}

console.log(arrayBombe);



while (arrayNumeriOk.length < 84) {
    var input = parseInt(prompt("inserisci un numero da 1 a 100"));
    console.log(input);

    if (isNaN(input)) {
        console.log("non era un numero; inserisci un numero");
        // continue; --> non esegue il codice sotto; ricomincia il ciclo while. 
    } else if (arrayBombe.includes(input)) {
        console.log("spiacente, hai perso!");
        break;
    } else if (!arrayNumeriOk.includes(input)) {
        arrayNumeriOk.push(input);
        console.log("l'arrayNumeriOk ha i numeri... " + arrayNumeriOk);
    }

    if (arrayNumeriOk.length + arrayBombe.length === 100) {
        console.log("hai vinto!!")
    }
}


