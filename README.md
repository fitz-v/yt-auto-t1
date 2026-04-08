# YouTube Auto t=1 ⏱️

Une extension de navigateur légère (pour Brave, Chrome, Edge et autres navigateurs basés sur Chromium) qui ajoute automatiquement le paramètre `&t=1` aux URL des vidéos YouTube.

## 📝 Description

Cette extension force le démarrage systématique des vidéos YouTube à la première seconde (`t=1s`). Cette astuce est utilisée pour contourner certains comportements agaçants de la plateforme, comme des bugs de lecture automatique ou l'affichage de certains encarts publicitaires.

## ⚙️ Fonctionnalités techniques

* Développée avec **Manifest V3**.
* Utilise des filtres d'URL stricts (`hostContains: 'youtube.com'`) pour ne pas consommer de ressources sur les autres sites web.
* Vérifie l'URL avant d'agir. Si vous partagez un lien avec un timestamp spécifique (ex: `&t=45`) ou si le paramètre est déjà présent, l'extension n'interfère pas.

## 🚀 Installation manuelle (Mode Développeur)

L'extension n'étant pas distribuée sur le Chrome Web Store, voici comment l'installer localement sur votre navigateur :

1. Clonez ce dépôt ou téléchargez le code source sous forme d'archive ZIP (puis extrayez-le).
2. Ouvrez votre navigateur et accédez au gestionnaire d'extensions :
   * Sur Brave : `brave://extensions/`
   * Sur Chrome : `chrome://extensions/`
3. Activez le **Mode développeur** (généralement un interrupteur situé en haut à droite de la page).
4. Cliquez sur le bouton **Charger l'extension non empaquetée** (Load unpacked) qui vient d'apparaître.
5. Sélectionnez le dossier contenant les fichiers `manifest.json` et `background.js`.

L'extension est désormais installée et fonctionnelle !

## 🔒 Confidentialité et Permissions

Cette extension est open source et respecte votre vie privée. Elle requiert certaines permissions dans le `manifest.json` :

* `tabs` : Nécessaire pour forcer le rafraîchissement de l'onglet avec la nouvelle URL modifiée.
* `webNavigation` : Indispensable pour détecter les changements d'historique (lorsqu'une nouvelle vidéo se charge dans une playlist sans que la page entière ne soit rechargée).
* `*://*.youtube.com/*` : Restreint l'exécution du script d'arrière-plan **uniquement** aux pages YouTube.