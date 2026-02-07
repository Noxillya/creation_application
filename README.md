# Projet de création d'application
Dan Jeong

## Table des matières
* [Installation](#installation)
* [Backend](#backend)
* [Frontend](#frontend)
* [Fonctionnement](#fonctionnement)

## Installation

Avant de pouvoir lancer le projet, il faut s'assurer d'installer les dépendances suivantes :

1. **Backend**
* Java 17+
* Maven

2. **Frontend**
* Nodejs
* Angular CLI

3. Vous pouvez ensuite cloner le dossier avec la commande suivante :
```bash
git clone https://github.com/Noxillya/creation_application.git
cd creation_application
```

## Backend

Le backend représente la partie de l'application qui est gérée côté serveur. Dans notre cas, ce sera ici que seront gérés les livres.

1. Il faut commencer par se placer dans le répertoire demo
```bash
cd demo
```
2. Et vous pouvez lancer le backend avec la commande
```bash
./mvnw spring-boot:run
```

Le serveur est maintenant démarré sur
```
http://localhost:8080
```

Une fois lancé, vous pouvez aussi accéder à la documentation swagger avec le lien suivant :
```
http://localhost:8080/swagger-ui.html
```

Et vous pouvez aussi tester l'API avec notemment Bruno ou Postman.

## Frontend

A l'inverse du backend, le frontend, sera la partie visible d'une application avec laquelle l'utilisateur intéragit directement.
Ici ce sera un site web sur lequel la gestion des livre peut se faire rapidement.

1. Pour lancer le front, vous pouvez commencer par vous rendre dans le dossier du frontend
```bash
cd ..
cd front-books
```

2. Et à partir de ce répertoire, vous pouvez lancer le frontend
```bash
npm install 
ng serve
```

L'application sera maintenant accessible sur
```
http://localhost:4200
```

## Fonctionnement

1. Communication
Le frontend appelle l'API via 
```
http://localhost:8080/api/books
```

2. Base de données
Le projet utilise H2, une base de donnée en mémoire. Il ne garde par conséquent pas en mémoire les différents livres stockés, et le projet sera donc réinitialisé à chaque redémarrage.

Vous pouvez accéder à la console H2 grâce au lien 
```
http://localhost:8080/h2-console
```
