PROJET EN DETAIL
================

Voici l'explication de chaque dossier du projet :

## Node_modules 
* Ici est centralisé les composants de notre npm install (node)

## Ressources 
* Ici sont stocké les ressources pour chaque platform IOS & Android (icon & splash)

## SRC 

### APP
* App.component permet de gérer la page d'attérissage
* App.modules permet d'indiquer toutes les pages que nous allons importer.

### ASSETS 
* Ici est stocké le favicon

### PAGES
* Ici sont stocké toutes les pages créées (** Astuce pour créer une page : ionic g page NomDeLaPage **)
* Chaque dossier représente les différentes pages constitué de 3 types un ficher HTML, un TS puis un SCSS
* Le HTML constitu la structure de la page, le TS est le controller de la page, le SCSS est l'aspect graphique de la page.

### PROVIDERS
* Dans ce dossier nous avons un fichier login-services.ts qui permet le lien avec l'api.
* Ce fichier permet de récupérer lors de la connexion toute la bibliothèque de l'utilisateur identifié.

### THEME 
* Dans ce dossier nous avons les règles générales afins de définir des thèmes graphiques, comme les couleurs du site, nous pouvons avoir différentes règle celon les sections.

## WWW
* Ce dossier est le rendu généré par ionic afin de voir un aperçu. Résultat de la compilation.
__Peut être supprimé en cas de conflit lors d'un **ionic serve**__ 


## .GITIGNORE
* Permet de ne pas git push certain dossier du projet comme Node_modules..

## PACKAGE.JSON
* Ce fichier permet de décrire l'ensemble des dépendences de ce projet, ainsi que leur version. Fichier très cruciale lors d'un projet Ionic (nous sommes passé par ce fichier pour inclure le plugin de scanner quand il ne voulait pas s'installer)

## IO-CONFIG.JSON
* Permet de renseigner la key de l'APP ainsi que de l'API

