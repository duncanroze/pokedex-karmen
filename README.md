# Pokédex Karmen

Un mini Pokédex fullstack développé avec **React + TypeScript** en front-end et **NestJS** en back-end.

Le front permet de saisir un numéro de Pokémon, et affiche ses caractéristiques (nom, sprite, types, taille, poids) récupérées via le back-end. Le back-end interroge la [PokeAPI](https://pokeapi.co/) et ne retourne que les données utiles.

---

## 🔧 Installation & Lancement

### 1. Cloner le projet

```bash
git clone https://github.com/duncanroze/pokedex-karmen.git
cd pokedex-karmen
```

---

### 2. Lancer les serveurs (front + back)

Depuis la racine du projet :

```bash
npm install
npm run dev
```

> L'API sera disponible sur [http://localhost:3000](http://localhost:3000)  
> Le front sera accessible sur [http://localhost:5173](http://localhost:5173)

---

## 🔁 Exemple d'appel API

**GET** `/pokemon/25` → [http://localhost:3000/pokemon/25](http://localhost:3000/pokemon/25)

Réponse JSON :
```json
{
  "id": 25,
  "name": "pikachu",
  "height": 4,
  "weight": 60,
  "types": ["electric"],
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
}
```

---

## ✅ Fonctionnalités

- ✅ Recherche d’un Pokémon par son numéro
- ✅ Traitement des données côté back-end
- ✅ Affichage clair des caractéristiques principales

---

## 📦 Stack utilisée

- **Front** : React, Vite, TypeScript
- **Back** : NestJS, TypeScript, Axios
- **API de données** : [PokeAPI](https://pokeapi.co/)

---

## 🧑‍💻 Auteur

Projet réalisé dans le cadre d’un exercice de développement.  
Licence : MIT
