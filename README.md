# 📚 Documentation de l'API

Cette API est conçue pour gérer les catégories, les sous-catégories, les articles et les utilisateurs d'une application. Elle permet de récupérer, créer, modifier et supprimer des éléments dans ces différentes collections.

## 💻 Technologies utilisées

- Node.js
- Express.js
- MongoDB
- Mongoose

## ⚙️ Installation

###### 1. Clonez ce dépôt sur votre machine locale.
###### 2. Assurez-vous d'avoir Node.js et MongoDB installés sur votre système.
###### 3. Installez les dépendances en exécutant la commande suivante :

```bash
npm install
```

###### 4 - Créez un fichier `.env` à la racine du projet et ajoutez-y les variables d'environnement suivantes :

```bash
PORT = 3000
DATABASE = <URL_de_votre_base_de_données_MongoDB>
```
###### 5 - Démarrez le serveur en exécutant la commande suivante : 

```bash
npm start
```

## 🚀 Endpoints de l'API
### Catégories
| REQUETE | ENDPOINT | DESCRIPTION |
|---------|----------|-------------|
| GET     | /api/categories | Récupérer la liste des catégories. |
| POST    | /api/categories | Créer une nouvelle catégorie. |
| GET     | /api/categories/{categorieId} | Récupérer les détails d'une catégorie spécifique. |
| PUT     | /api/categories/{categorieId} | Modifier une catégorie existante. |
| DELETE  | /api/categories/{categorieId} | Supprimer une catégorie existante. |

### Sous-catégories
| REQUETE | ENDPOINT | DESCRIPTION |
|---------|----------|-------------|
| GET     | /api/scategories | Récupérer la liste des sous-catégories. |
| POST    | /api/scategories | Créer une nouvelle sous-catégorie. |
| GET     | /api/scategories/{scategorieId} | Récupérer les détails d'une sous-catégorie spécifique. |
| PUT     | /api/scategories/{scategorieId} | Modifier une sous-catégorie existante. |
| DELETE  | /api/scategories/{scategorieId} | Supprimer une sous-catégorie existante. |
| GET     | /api/scategories/cat/{categorieID} | Récupérer la liste des sous-catégories d'une catégorie spécifique. |

### Articles
| REQUETE | ENDPOINT | DESCRIPTION |
|---------|----------|-------------|
| GET     | /api/articles | Récupérer la liste des articles. |
| POST    | /api/articles | Créer un nouvel article. |
| GET     | /api/articles/{articleId} | Récupérer les détails d'un article spécifique. |
| PUT     | /api/articles/{articleId} | Modifier un article existant. |
| DELETE  | /api/articles/{articleId} | Supprimer un article existant. |
| GET     | /api/articles/scat/{scategorieID} | Récupérer la liste des articles d'une sous-catégorie spécifique. |
| GET     | /api/articles/cat/{categorieID} | Récupérer la liste des articles d'une catégorie spécifique. |
| GET     | /api/articles/articles/pagination | Récupérer la liste des articles avec pagination. |

### Utilisateurs

| REQUETE | ENDPOINT | DESCRIPTION |
|---------|----------|-------------|
| GET    | /api/users | Récupérer la liste des utilisateurs. |