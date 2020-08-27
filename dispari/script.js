// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L'utente sceglie pari o dispari
var pariDispari = prompt("scegli pari o dispari");
console.log(pariDispari);

// l'utente inserisce un numero da 1 a 5
var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(numeroUtente);

// generiamo un numero random da 1 a 5
function numeroRandom() { //lasciamo le parentesi vuote perche la funzione non accetta paramentri in entrata
  var numeroACaso = Math.floor(Math.random() * 5) + 1;
  return numeroACaso;
}
// sommiamo i due numeri //somma del numero casulae più il numero dell'utente
var somma = numeroRandom() + numeroUtente;

function numeroPari(num) { //funzione per stabilire se un numero è pari o dispari
  if (num % 2 == 0) {
    return true; //
  } else {
    return false;
  }
}

var risultatoFinale = numeroPari(somma);
console.log(risultatoFinale);

if (pariDispari == "pari" && risultatoFinale == true) {
  alert("Hai Vinto!!!");
} else if (pariDispari == "dispari" && risultatoFinale == false) {
  alert("Hai Vinto!!!");

} else {
  alert("Hai Perso!!!");
}
