/*
console.log("hello JS");

// Un commentaire
/* 
  Un autre type de commentaire...
  ...pouvant prendre plusieurs lignes à la fois
*/

/*
// Déclarer une variable
var age = 20; // -> ancienne manière, ne pas déclarer nos variables comme tel !
let weight = 1; // On crée une variable modifiable dans le futur
const skyColor = "blue"; // On crée une variable inchangeable dans le futur

let calculation = 3 + 3;
// Modifie variable
calculation = calculation - 2;

let string1 = "blue";
let string2 = "blue";
let string3 = `Le résultat est ${calculation}`;

console.log(calculation);
console.log(string3);
console.log(string1 + " " + string2);

let isNight = false;
let isDay = true;

let noValue = null;
let undefinedValue = undefined;

console.log(undefinedValue);

const multiply = 3 * 477;
const divide = 3 / 477; // On obtient un float !
// Float veut dire une variable décimale (ici : 0,00628....)

console.log(multiply);
console.log(divide);

let modulo = 5 % 2;
console.log(modulo);

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

// Symbols

let id = Symbol("id");
let id2 = Symbol("id");
console.log(id === id2);
*/

// let isDay = false;
// let isMidDay = true;
//
// if (isMidDay === false) {
//   console.log("C'est le midi");
// } else if (isDay) {
//   console.log("C'est le jour");
// } else {
//   console.log("C'est la nuit");
// }

const readline = require("readline");

console.log(
  "ON est sur une appli pour télécharger des jeux vidéos (légalement)",
  "\nValeurs possibles de pegi : 7, 12, 16, 18"
);

let age = undefined;
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question("Quel age avez-vous ? ", (input) => {
  console.log(`Vous avez entré : ${input}`);
  age = input;

  let name = "Pat'";

  switch (age) {
    case "0":
      if (name === "Pat'") {
        console.log("Ça va ;)");
      } else {
        console.log("Bof, vous avez 0 ans, c'est pas acceptable");
      }
      break;
    case "7":
      console.log(`Vous avez ${age} ans, l'age requis est de 7 ans`);
      break;
    case "12":
      console.log(`Vous avez ${age} ans, l'age requis est de 12 ans`);
      break;
    case "16":
      console.log(`Vous avez ${age} ans, l'age requis est de 16 ans`);
      break;
    case "18":
      console.log(`Vous avez ${age} ans, l'age requis est de 18 ans`);
      break;
    default:
      console.log("Votre âge n'est pas égal à un Pegi possible");
      break;
  }

  readlineInterface.close();
});
