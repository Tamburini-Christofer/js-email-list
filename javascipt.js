// Selezione elementi nella pagina

// Seleziomo la lista usando L'ID
const OutputList = document.getElementById("lista");

// Seleziomo il bottone usando L'ID
const bottone = document.getElementById("bottone");

//Funzione per generare 10 email
function CreaEmail() {

//Creiamo un ciclo for per ciclare l'email che verranno generate
  for (let i = 0; i < 10; i++) {
    axios
//Colleghiamoci all'API
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
//Dopo...
      .then(response => {
//Scriviamo in HTML l'email nelle liste   
        lista.innerHTML += `<li>${response.data.response}</li>`    
    })
  } 
}

//Chiamiamo la funzione 
CreaEmail();

// Al click generiamo nuove email e svuotiamo le altri
bottone.addEventListener("click", () => {
  OutputList.innerHTML = "";
  CreaEmail();
});


