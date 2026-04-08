# 🚀 TODO List - Améliorations futures

Ce fichier regroupe les idées d'évolution pour l'extension "YouTube Auto t=1". 

## 🟢 Priorité Basse / Facile (Manipulation d'URL)

- [ ] **Nettoyeur d'URL (Anti-pistage)**
  - Détecter et supprimer automatiquement le paramètre de suivi `&si=` souvent ajouté par YouTube lors du partage d'une vidéo.
  - *Objectif :* Garder des URL propres et améliorer la confidentialité.

## 🟡 Priorité Moyenne / Intermédiaire (Amélioration de l'UX)

- [ ] **Transformer les "Shorts" en vidéos classiques**
  - Intercepter les URL contenant `/shorts/ID` et les rediriger vers le lecteur classique `/watch?v=ID`.
  - *Objectif :* Récupérer la barre de progression, le contrôle du volume et éviter le défilement infini des Shorts sur PC.

- [ ] **Page d'options (Paramétrage du temps de saut)**
  - Créer une page de paramètres (HTML/JS) accessible via le menu des extensions.
  - Utiliser l'API `chrome.storage` pour sauvegarder la préférence de l'utilisateur.
  - *Objectif :* Ne plus hardcoder le `t=1`. Permettre à l'utilisateur de choisir de sauter 5, 10 ou 15 secondes pour passer les intros par exemple.

## 🟠 Priorité Haute / Complexe (Interface Utilisateur)

- [ ] **Popup d'activation On/Off**
  - Créer une interface (HTML/CSS) qui s'ouvre au clic sur l'icône de l'extension.
  - Ajouter un bouton toggle (interrupteur) pour activer ou désactiver temporairement l'extension.
  - *Objectif :* Permettre de désactiver le script facilement sans avoir à passer par le gestionnaire d'extensions du navigateur (`brave://extensions/`), utile si l'on veut vraiment lire une vidéo depuis `t=0`.
