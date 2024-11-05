Contenu du fichier `Dockerfile` à créer :

```Dockerfile
# Utilisation d'une image de base Node.js
FROM node:14

# Création du répertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers du projet dans le conteneur
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers dans le conteneur
COPY . .

# Exposition du port utilisé par l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
```

Je vous laisse faire votre propre recherche sur comment lancer l'installation de votre Dockerfile, puis lancer votre serveur docker

- 
- 

- 
- 

- 
- 

- 
- 

- 
- 

- 
- 

- 
- 

- 
- 



## Spoiler (réponse)

![image](https://github.com/user-attachments/assets/ff37942c-a79b-46a5-b1d8-a772ff8c8df2)


### Option 1

```sh
npm start
docker build -t ton_image .
docker run -p 3000:3000 ton_image
```

### Option 2 (plus compliquée)

![image](https://github.com/user-attachments/assets/e809afc1-5070-4c89-a544-18b0711cf657)

[Source](https://stackoverflow.com/questions/36075525/how-do-i-run-a-docker-instance-from-a-dockerfile)

Meilleure commande pour lancer docker
```sh
docker run -p 3000:3000 a3e628814c67
```
