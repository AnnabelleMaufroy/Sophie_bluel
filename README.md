## Description du projet

Ce projet consiste à rendre le site internet d'un architecte d'intérieur dynamique grâce à la récupération de données depuis une base de données sqlite.
L'utilisateur pourra voir les images s'afficher et les trier par catégories. Il pourra se connecter pour supprimer et ajouter de nouvelles images.

## Fonctionnalités

- Page de connexion permettant aux utilisateur de gérer ses propres images
- Affichage dynamique des photos en fonction de leurs catégories
- Communication avec l'API afin d'afficher, ajouter et supprimer des images

## Structure du projet

- `index.html` : Fichier principal contenant la structure HTML de la page d'accueil.
- `api.js` : Fichier contenant l'api de l'application faisant le lien entre le frontend et le backend
- `backend/database.sqlite` : Fichier de la base de données du projet
- `Component/`: Dossier contenant tout les scripts créant les éléments dynamique
  
## Installation et exécution

1. Clonez le dépôt Git sur votre machine locale :
    ```bash
    git clone https://github.com/AnnabelleMaufroy/Sophie_bluel.git
    ```
2. Lancer le backend du projet
	```bash
	cd .\Backend\
	node server.js
	```
3. Ouvrez le fichier `index.html` dans votre navigateur pour voir le site en action.

## Technologies utilisées

- **HTML5**
- **CSS3**
- **Javascript**
- **Git** pour la gestion de versions
- **sqlite**

## Auteur

Projet réalisé par Maufroy Annabelle.

---

Ce projet a été développé dans le cadre d'une formation de développeur web.
