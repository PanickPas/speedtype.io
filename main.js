import * as config from './config.js';
import * as fonction from './function.js';

// Maintenant, vous pouvez utiliser ces fonctions dans votre fichier principal.
// Par exemple, vous pouvez appeler functions.startGame() au lieu de startGame().

// Utilisez les fonctions ici en les appelant comme suit :
functions.startGame(
  choix,
  type,
  functions.resetGame,
  texteElement,
  zonetext,
  motsButton,
  phrasesButton,
  countdown,
  timer,
  functions.updateTimer
);

functions.addEventListeners(motsButton, phrasesButton, functions.startGame);

functions.addKeyDownEventListener(
  zonetext,
  zonetextValue,
  choix,
  score,
  scoreElement,
  config,
  texteElement
);

// Réinitialisez le jeu au chargement de la page
functions.resetGame(
  scoreElement,
  zonetext,
  texteElement,
  motsButton,
  phrasesButton
);
