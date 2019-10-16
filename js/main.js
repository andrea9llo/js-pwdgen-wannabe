// chiedo nome utente
var nameUtente = prompt("Nome");
// console.log(nameUtente);

// stringa di saluto dopo inserimento nome
var saluto = "ciao " + nameUtente;
// console.log(saluto);

// chiedo cognome utente
var surname = prompt("Cognome");
// console.log(surname);

// chiedo colore preferito utente
var color = prompt("Colore preferito");
// console.log(color);

// creazione password
var password = nameUtente + surname + color + 19;
// console.log(password);

// stringa dopo inserimento cognome
var creaPassword = saluto + " " + surname +", la tua password è: ";
// console.log(creaPassword);

// stringa password creata
var passwordGene = creaPassword + password;
// console.log(passwordGene);

// stringa finale dopo creazione password
var testo = "Hai creato un (insicurissimo) password generator!";
// console.log(testo);

// creo stringa per output password
document.getElementById('ex-var').innerHTML = passwordGene;

// creo stringa per output testo
var htmlElement = document.getElementById('ex-var1');

htmlElement.innerHTML = testo;
