//fare il prompt per le richieste di km ed età
//calcolare in generale il prezzo del biglietto moltiplicando i km inseriti per 0,21
//applicare gli sconti con gli if etc...


var numeroKm = prompt ('Indicare quanti chilometri desidera percorrere')
var eta = prompt ('Indicare la propria età')
var prezzoBase = numeroKm * 0.21;
console.log(prezzoBase);
var scontoMinorenni = (prezzoBase / 100) * 20;
var scontoAnziani = (prezzoBase / 100) * 40;
var prezzoMinorenni = prezzoBase - scontoMinorenni;
var prezzoAnziani = prezzoBase - scontoAnziani

if (eta < 18) {
    console.log('Lei è minorenne quindi paga: ' + prezzoMinorenni);
}

if (eta > 65) {
    console.log('Lei è over65 quindi paga: ' + prezzoAnziani);
}
