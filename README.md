<div align="center">

        📲 Electron JS 🔝

<img src="352shots_so.png" />
        
</div>



 site responsive 3 colonnes:

- installer sass avec : npm i sass 
-installer nodemodule avec : npm i nodemodule

- faire npm start dans la console pour lancer le fichier json.
- le fichier json lance a son tour les scripts qu'il a.

1   crée un dossier dans VScode
2   terminal = npm init

3   terminal = 
    npm i electron // vous pouvez rajouter le nom du packadge que vous voulez utiliser

4   terminal = npm install electron-reload
    exemple: npm i electron resize-img toastify-js

4   crée un fichier main.js
5   dans le json mettre le script: "start": "electron ."


6   ajoute la ligne dans main.js :
    const electronReload = require('electron-reload'); electronReload(__dirname,{});

7   lancer npm start

//////////////////////////////////////ici pour l'appli bureau //////////////////////////////////////////////////


1 / npm install --save-dev @electron-forge/cli
2 / npx electron-forge import

3 / dans le fichier forge.config : 
            je rajoute la signature dans config entre moustach ==>         certificateFile: './cert.pfx',
                                                                            certificatePassword: process.env.CERTIFICATE_PASSWORD,

4 / Dans le json rajouter :   "repository": {
                            "type": "git",
                            "url": "https://github.com/Mika73100/new_projet_API_GITHUB"
                        },
                        "author": "MIKA73100",

4 / Généré un token sur github et le mettre dans config.forge

5 / npm install update-electron-app

6 / npm install --save-dev @electron-forge/publisher-github

7 / Aller dans GITHUB et mettre une realise puis publier derrière le projet.


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



Ligne 11 jason : "publish": "electron-forge publish"


ajout de author a jason 

npm run publish








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



Contexte du projet
🖊️ Cher Développeur,

Si je t'écris cette mission, c'est qu'elle est CAPITALE pour l'entreprise.

👁️ Je t'observe mettre en place des outils magnifiques fonctionnant avec les technologies Web 🚀

😟 Cependant, tous nos postes ne sont pas forcement connectés à Internet ou ne sont pas à jour à cause de contraintes technique liées à d'autres outils installés sur ces machines.

En dépoussiérant mon bureau et mes tiroirs 🗑️, je suis tombé sur une photo de toi plus jeune (t'était beau gosse à l'époque et avec tes cheveux), je parle bien sur de celle sur ton CV. Et quel CV, whoua....HTML, CSS, JS, NODE, Front, Back, API et j'en passe, je ne comprends même pas le 1/4 de ton taff lol....et j'ai vu **Dev Desktop **🌞 !!! Là tu m'interesses.

Il me faudrait une app Desktop (Windows & Mac, bonus Linux distribution Ubuntu) sur la thématique de ton choix (reprise du projet API réalisé en formation, autre,...). Profites pour mettre ton talent en avant 🍔🍕🍺, soit force de proposition afin d'exploiter le potentiel des machines.

Il faut impérativement de l'auto-update de l'application
Envoyer des Push notifications ☁️
CRUD depuis l'application ! (Admin ou User ou les 2 : BONUS)
L'idéal c'est que cette application s'ouvre dans une fenêtre que l'on peut redimensionner
Une icone personnalisée 🤑
Bonus : Gestion du mode Hors ligne !
Je suis déjà tout exité de savoir que je vais avoir l'application de mes rêve 🏊💰.

Bonne chance, rendez-vous dans la fusée pour un beau voyage peut être sans retour 😁 !



​

Idée d'application : Pokédex, jukebox, bar à coktail, plateforme de gestion de jeu Steam, ...
