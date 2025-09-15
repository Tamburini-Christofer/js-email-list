// Selezione elementi nella pagina

// Seleziono la lista usando L'ID
const OutputList = document.getElementById("lista");

// Seleziono il bottone usando L'ID
const bottone = document.getElementById("bottone");

// Creiamo una variabile che contenga l'email che verranno randomizzate
const emailRandom = [];

//Funzione per generare 10 email
function CreaEmail() {
//Quando la lunghezza dell'array arriva al valore 0...
  emailRandom.length = 0;
//...La lista viene svuotata
  OutputList.innerHTML = "";

//Creiamo un ciclo for per ciclare l'email che verranno generate
  for (let i = 0; i < 10; i++) {
    axios
//Colleghiamoci all'API
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
//Pushiamo nell'array emailRandom 
      .then(response => {
        emailRandom.push(response.data.response);

//Se abbiamo creato 10 email
        if (emailRandom.length === 10) {
// Creiamo un'unica stringa di <li>
// Creiamo una variabile vuole stringa che conterrà l'email
          let listaCompleta = "";
// Facciamo un for che possa creare i li
          for (let j = 0; j < emailRandom.length; j++) {
// Modifichiamo la variabile sopra con i nuovi li
            listaCompleta += `<li>${emailRandom[j]}</li>`;
          }
//Scriviamo la lista completa in HTML
          OutputList.innerHTML = listaCompleta;
        }
      })
    }
}

// Al click generiamo nuove email
bottone.addEventListener("click", CreaEmail);

//Chiamiamo la funzione 
CreaEmail();

