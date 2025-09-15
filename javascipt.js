// Descrizione

// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus

// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre

// Per prima cosa selezioniamo gli elementi nella pagina
const OutputList = document.getElementById("lista");
const bottone = document.getElementById("bottone");

// Creiamo una variabile globale che contenga l'email generate
// Questa è già settata come Arrey
const emailRandom = [];

// Creiamo una funziona che possa generare l'email casualmente con API 
function CreaEmail () {
// Creiamo un ciclo For che possa generare tutte e 10 l'email
         for (let i = 0; i < 10; i++) {
//Usiamo L'API di Boolean che generi l'email che vogliamo
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            
}}
