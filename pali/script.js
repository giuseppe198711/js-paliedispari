// Creare una funzione per capire se la parola inserita è palindroma

// faccio inserire all'utente la parola
var parola = prompt("Inserisci la parola");
console.log(parola);

function ilPalindromo(str) {
  // leggo la parola al contrario
  // creo un ciclo for che parte dalla fine della parola;
  // continua fino a che non arrivo alla prima lettera(0);
  // decremento di uno ogni volta;
  var parolaReverse = ""; //sto creando una variabile esterna al ciclo perchè altimenti  se la metto al'interno del for ad ogni ciclo del for si andrebbe a ricreare perdendo il contenuto

  for (var i = str.length-1; i >= 0; i--) {
    // i parte con un valore numerico pari al numero di lettere all interno della parola
    // mi salvo la mia parola al contrario
    parolaReverse = parolaReverse + str[i]; //possiamo scrivere anche parolaReverse += parola[i];
    // i decrementa di 1
  }
return parolaReverse;
}

// confronto la parola con quella di origine
if (ilPalindromo(parola) == parola) {
  console.log("la parola è palindroma");
} else {
  console.log("la parola non è palindroma");
}
