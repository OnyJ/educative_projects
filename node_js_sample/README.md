# NodeJS template

Ce repository est un projet NodeJS basique, quasiment vide.

But : à utiliser pour dockeriser le projet, en suivant le cours.

## Comment coder ce projet from scratch

```sh
# créer un dossier pour le projet et s'y rendre
mkdir projet-docker
cd project-docker

# faire un repository git
git init

# créer le package.json pour faire un projet js
npm init

# installer le package express
npm install express

# installer les dépendances
npm install

# attention à toujours ignorer node_modules
touch .gitignore
# écrire node_modules dans .gitignore

# créer les fichiers nécessaires pour le projet
mkdir src
touch src/index.js
```

Le package.json devrait commencer par les lignes suivantes :
(attention à bien ajouter le script `"start"` !)

```json
{
  "name": "le nom de ton app",
  "version": "une certaine version",
  "description": "ta description",
  "main": "index.js",
  "scripts": {
    "start": "node src/index.js"
  }
  // le reste du fichier...
}
```

Écrire ce code dans `src/index.js` :

```js
const app = require("express")();

app.get("/", (req, res) => res.json({ message: "Bonjouuuur :)" }));

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);
```

Et voilà on a une app backend NodeJS 😎
Il suffit de faire `npm start` (comme indiqué dans `package.json`) pour lancer le serveur, depuis le terminal.

## Ajouter le Dockerfile

Son contenu [se trouve ici](dockerfile_content.md)
