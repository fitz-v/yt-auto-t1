// Fonction centrale qui vérifie et met à jour l'URL
function checkAndUpdateUrl(details) {
  // On s'assure d'agir uniquement sur la page principale, pas dans des iframes invisibles
  if (details.frameId !== 0) return;

  try {
    let url = new URL(details.url);

    // On cible uniquement les pages de lecture de vidéo ET on vérifie qu'il n'y a pas déjà un paramètre de temps
    if (url.pathname === "/watch" && !url.searchParams.has('t')) {
      url.searchParams.set('t', '1');

      // On force la mise à jour de l'onglet avec la nouvelle URL
      chrome.tabs.update(details.tabId, { url: url.toString() });
    }
  } catch (e) {
    console.error("Erreur lors de l'analyse de l'URL :", e);
  }
}

// Filtre pour ne déclencher ces événements que sur YouTube (optimise les performances de votre navigateur)
const filter = { url: [{ hostContains: 'youtube.com' }] };

// 1. Détecte les rechargements de page (F5) et les accès directs via la barre d'adresse
chrome.webNavigation.onBeforeNavigate.addListener(checkAndUpdateUrl, filter);

// 2. Détecte la navigation interne sans rechargement (Accueil -> Vidéo, ou Playlist -> Vidéo suivante)
chrome.webNavigation.onHistoryStateUpdated.addListener(checkAndUpdateUrl, filter);