# First React Project!!

Experimenting React webapp creation, with ViteJS.

## Exercice 1

Dans cette application React :

- créer une fonctionnalité qui permet à l'utilisateur de décrocher le téléphone et de recevoir un appel aléatoire d'une star internationale.
- Utiliser le hook `useState` pour gérer l'état de l'appel en cours.
- Lorsque l'utilisateur clique sur le bouton 'Décroche ton tel', une star sera choisie au hasard parmi une liste prédéfinie, et son nom ainsi qu'un message inspirant **seront affichés à l'écran.**

À vous de jouer 😎

```javascript
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [call, setCall] = useState("Aucun appel en cours");

  const stars = [
    {
      name: "Taylor Swift",
      phrase: "Salut ! J'espère que tu passes une bonne journée !",
    },
    {
      name: "Dwayne Johnson",
      phrase:
        "Hey, c'est The Rock ! Prêt à conquérir le monde ensemble ?",
    },
    {
      name: "Beyoncé",
      phrase: "Bonjour ! N'oublie jamais que tu es incroyable !",
    },
    {
      name: "Leonardo DiCaprio",
      phrase:
        "Salut ! Merci de soutenir la lutte contre le changement climatique.",
    },
    {
      name: "Ariana Grande",
      phrase: "Hey ! Rappelle-toi de toujours croire en toi !",
    },
    {
      name: "Elon Musk",
      phrase: "Salut ! Prêt à explorer Mars un jour ?",
    },
    {
      name: "Oprah Winfrey",
      phrase:
        "Bonjour ! N'oublie pas que tu as le pouvoir de changer ta vie.",
    },
    {
      name: "Rihanna",
      phrase: "Hey ! Sois audacieux et n'aie pas peur de briller !",
    },
    {
      name: "Chris Hemsworth",
      phrase: "Salut ! Prends soin de toi et reste fort !",
    },
    {
      name: "Selena Gomez",
      phrase:
        "Bonjour ! N'oublie jamais de prendre soin de ta santé mentale.",
    },
    {
      name: "Drake",
      phrase:
        "Hey ! Continue de poursuivre tes rêves, peu importe les obstacles.",
    },
    {
      name: "Jennifer Lopez",
      phrase:
        "Salut ! La vie est une danse, alors danse comme si personne ne regardait !",
    },
    {
      name: "Kanye West",
      phrase:
        "Bonjour ! Sois créatif et n'aie pas peur d'exprimer tes idées.",
    },
    {
      name: "Emma Watson",
      phrase: "Hey ! L'éducation est la clé pour changer le monde.",
    },
    {
      name: "Justin Bieber",
      phrase:
        "Salut ! Rappelle-toi que chaque jour est une nouvelle chance.",
    },
    {
      name: "Meryl Streep",
      phrase: "Bonjour ! L'art est une belle façon de s'exprimer.",
    },
    {
      name: "Bill Gates",
      phrase:
        "Hey ! Investir dans l'éducation est essentiel pour l'avenir.",
    },
    {
      name: "Scarlett Johansson",
      phrase: "Salut ! N'oublie pas de toujours suivre ton cœur.",
    },
    {
      name: "Robert Downey Jr.",
      phrase:
        "Bonjour ! La vie est une aventure, profite de chaque instant.",
    },
    {
      name: "Lady Gaga",
      phrase:
        "Hey ! Sois fier de qui tu es et n'aie pas peur d'être différent.",
    },
    {
      name: "Tom Hanks",
      phrase:
        "Salut ! La gentillesse est la plus grande force que nous avons.",
    },
  ];

  function pickUpThePhone() {
    // À toi de jouer :
    // - choisir un star aleatoire
    // - stocker le nom de celle-ci
    // - stocker le paragraphe de sa phrase
    // - afficher à l'écran le nom et le paragraphe de l'appel en cours
  }

  return (
    <>
      <h1>AAllo ?</h1>
      <p>
        Bienvenue sur <strong>RandomPhoneCall.com</strong>
      </p>
      <p>
        Cette app vous permet de décrocher le téléphone et d'avoir une
        star aléatoire au bout du fil.
      </p>
      <button onClick={pickUpThePhone}>Décroche ton tel</button>
    </>
  );
}

export default App;
```

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
