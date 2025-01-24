# Learn Git

## Notions de bases

> Comment prendre les bonnes habitudes avec Git ?  

1. Je fais mes modifications  
   _Nouveau fichier, supprimer, modifier...)_  
   -> dans Vscode par exemple

2. Je regarde (**TOUJOURS**) ce qui a changé.  
   C'est une habitude à faire toute les 10 secondes, le "ça en est où ?"  
   ```sh
   git status
   git diff
   git diff tel_fichier_ou_dossier
   ```

3. Je préchoisis les fichiers à enregistrer dans mon prochain commit  
   ```sh
   git add mon_fichier
   git add monDossier
   git add .  # si jamais je veux tout sauvegarder d'un coup, à utiliser rarement
   ...
   ```

4. Je crée mon nouveau commit (ma sauvegarde)
   ```sh
   git commit -m "J'ai créé une fonction qui fait le café"
   ```

5. Je peux consulter mes commits
   ```sh
   git log
   ```


Voir aussi dans [cette ressource](https://docs.google.com/document/d/1Z_Ip4ZBjPiy_kGh9rAy3xZwkdtyaovfVTTZKoHKnDtg/edit?tab=t.0#heading=h.axv5lin6stdy) pour plus de détails.


