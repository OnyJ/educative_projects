/*
//////////////////////////////////////////////////////
//
// On vérifie que le fichier est bien connecté au HTML

console.log("hello JS");

//////////////////////////////////////////////////////
//
// Notions de base en JS

// Un commentaire
/* 
  Un autre type de commentaire...
  ...pouvant prendre plusieurs lignes à la fois
*/

//////////////////////////////////////////////////////
//
// Les variables

/*
// Déclarer une variable
var age = 20; // -> ancienne manière, ne pas déclarer nos variables comme tel !
let weight = 1; // On crée une variable modifiable dans le futur
const skyColor = "blue"; // On crée une variable inchangeable dans le futur

// Les opérations,
let calculation = 3 + 3;
// Modifier une variable
calculation = calculation - 2;

let string1 = "blue";
let string2 = "blue";
let string3 = `Le résultat est ${calculation}`;

console.log(calculation);
console.log(string3);
// Concaténer plusieurs strings (aditionner)
console.log(string1 + " " + string2);

// Booléens
let isNight = false;
let isDay = true;

// Null et undefined
let noValue = null;
let undefinedValue = undefined;

console.log(undefinedValue);

// Autres opérations :
const multiply = 3 * 477;
const divide = 3 / 477; // On obtient un float !
// Float veut dire une variable décimale (ici : 0,00628....)

console.log(multiply);
console.log(divide);

// Modulo
let modulo = 5 % 2;
console.log(modulo);

// Objets
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

//////////////////////////////////////////////////////
//
// Les conditions

/*
let isDay = false;
let isMidDay = true;

if (isMidDay === false) {
  console.log("C'est le midi");
} else if (isDay) {
  console.log("C'est le jour");
} else {
  console.log("C'est la nuit");
}
*/

//////////////////////////////////////////////////////
//
// Readline pour le prompt,
// Switch

/*
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

*/

//////////////////////////////////////////////////////
//
// Les Boucles

/*
const readline = require("readline");
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Le nom magique est BobyLeMagicien");

let name = "No name";

while (name !== "BobyLeMagicien") {
  // name = prompt("Quel est le nom magique ?");

  readlineInterface.question("Quel est votre nom ? ", (input) => {
    console.log(`Vous avez entré : ${input}`);
    name = input;

    if (name === "BobyLeMagicien") {
      console.log("Bravo vous avez gagnééé !");
    }
  });
}
*/

//////////////////////////////////////////////////////
//
// Les fonctions

// camelCase PascalCase snake_case

/*
console.log(buildHello("Jean", "Duponteee"));

function helloWorld() {
  console.log("Hello World");
}
function sayHello(name) {
  console.log(`bonjour ${name}`);
}

function buildHello(firstName, lastName) {
  const fullName = firstName + " " + lastName;
  return "hello " + fullName;
}

// helloWorld();
// sayHello("Jean");

console.log(buildHello("Jean", "Dupont"));

const helloPhrase = buildHello("Jean", "Dupont");
console.log(helloPhrase);

const maFonction = () => {
  console.log("Là c'est ma fonction");
};

maFonction();

const users = [
  { name: "patrick", age: "2" },
  { name: "patrice", age: "22" },
];

// console.log(users[1].name)

console.log(() => {
  const calculation = 2 + 2;
  return calculation;
});

*/

//////////////////////////////////////////////////////
//
// Les classes

/*
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.password = null;
  }

  createPassword() {
    this.password = this.name + "1234" + this.email;
    console.log(this.password);
  }
}

const myUser = new User("Ford", "creatorOfCar@gmail.com");

console.log(myUser);
myUser.createPassword();
*/

//////////////////////////////////////////////////////
//
// Les tableaux

const numbers = [1, 2, 3, 4, 5];
const letters = ["a", "e", "i", "k"];
let stringsArray = [
  "bonjour",
  "comment",
  "ça",
  "va",
  "?",
  "#~é&!!%%",
];

// console.log(numbers);
// console.log(letters[3]);

// console.log(stringsArray);
// stringsArray.push("fred");
console.log("avant :");
console.log(stringsArray);
console.log("\n");

stringsArray.pop();
let string = stringsArray.join(" ");
string = string.concat(" Cordialement");

console.log("après :");
// console.log(stringsArray.slice());
console.log(stringsArray.concat(["Deuxieme", "Phrase"]));
// console.log(string)

// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 1, "Feb", "allo", "ola", "halo");
//
// console.log(months);
