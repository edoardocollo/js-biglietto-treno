// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

// CHIEDERE IL NUMERO DI KM CHE IL PASSEGGIERO VUOLE PERCORRERE.
var kmDaPercorrere= Number(prompt('quanti km vuoipercorrere?'));
if (isNaN(kmDaPercorrere)){
  alert('non hai inserito un numero!');
}
// CHIEDERE ETÀ PASSEGGIERO
var etaPasseggiero = Number(prompt('quanti anni hai?'));
if (isNaN(etaPasseggiero)){
  alert('non hai inserito un numero!');
}
// CALCOLARE PREZZO TOTALE DEL BIGLIETTO (0.21EURO/KM)
var prezzoKm = 0.21;
var prezzoSenzaSconto = kmDaPercorrere * prezzoKm;

// STAMPARE RISULTATO
document.getElementById('numero_km').innerHTML = kmDaPercorrere;
document.getElementById('costo_biglietto').innerHTML = prezzoSenzaSconto;

// CICLO IF SCONTO
if (etaPasseggiero < 18){
  var prezzoMinorenni = prezzoSenzaSconto * 0.8;
  var scontoMinorenni = document.getElementById('sconto_minorenni');
  scontoMinorenni.style.display = "block";
  scontoMinorenni.innerHTML = "Ma essendo minorenne benefici di uno sconto del 20%. quindi il prezzo del tuo biglietto è di " + prezzoMinorenni + " euro"
  // console.log (prezzoMinorenni);
} else if(etaPasseggiero > 65) {
  var prezzoOver = prezzoSenzaSconto * 0.6;
  var scontoOver = document.getElementById('sconto_over');
  scontoOver.style.display = "block";
  scontoOver.innerHTML = "Ma essendo over 65 benefici di uno sconto del 20%. quindi il prezzo del tuo biglietto è di " + prezzoOver + " euro";
  // console.log (prezzoOver);
} else {
}
