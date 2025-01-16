console.log("Hello");

//////////////////////////////////////
// Premièrement, cibler tous les éléments importants
// du HTML
const contentForm = document.getElementById("content-form");
const contentFormButton = document.getElementById(
  "content-form-button"
);
const tripList = document.getElementById("trip-list");

//////////////////////////////////////
// 2. Au moment de soumettre,
//    Stocker les valeurs dans un objet

// Je crée un objet vide qui sert à la création de mon futur voyage
let newTrip = {};

// On écoute le bouton. S'il y a un clic, alors :
// - il remplit l'objet vide
// - il remplit la liste de voyages
contentFormButton.addEventListener("click", (e) => {
  e.preventDefault();
  newTrip = {
    title: document.getElementById("trip-name").value,
    destination: document.getElementById("trip-destination").value,
    activity: document.getElementById("trip-activity").value,
    price: document.getElementById("trip-price").value,
  };
  tripList.innerHTML += `
    <li>
      <h2>${newTrip.title}</h2>
      <br>
      <p>${newTrip.destination} - <strong>${newTrip.price}</strong></p>
      <p>${newTrip.activity}</p>
    </li>`;
});

/////////////////////////////////////////
// 3. Enregistrer les voyages dans localstorage

// Reager tuto localstorage
