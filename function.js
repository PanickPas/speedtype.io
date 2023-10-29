// functions.js

export function updateTimer(timerElement, countdown, endGame) {
  timerElement.textContent = "Temps restant : " + countdown + "s";
  if (countdown <= 0) {
    endGame();
  }
  countdown--;
}

export function endGame(zonetext, timer, texteElement, score) {
  zonetext.disabled = true;
  clearInterval(timer);
  texteElement.textContent = "Temps écoulé, votre score est de " + score;
}

export function resetGame(
  scoreElement,
  zonetext,
  texteElement,
  motsButton,
  phrasesButton
) {
  score = 0;
  scoreElement.textContent = "Score : 0";
  zonetext.value = "";
  zonetext.disabled = true;
  texteElement.textContent = "Choisissez Mots ou Phrases pour commencer";
  motsButton.disabled = false;
  phrasesButton.disabled = false;
}

export function startGame(
  choix,
  type,
  resetGame,
  texteElement,
  zonetext,
  motsButton,
  phrasesButton,
  countdown,
  timer,
  updateTimer
) {
  if (choix === null || score > 0) {
    resetGame();
    choix = type;
    texteElement.textContent = "Prêt à jouer. Tapez " + type + " ci-dessus.";
    zonetext.disabled = false;
    motsButton.disabled = true;
    phrasesButton.disabled = true;
    countdown = 60;
    timer = setInterval(updateTimer, 1000);
  }
  texteElement.textContent = config[type + "Aleatoire"]();
}

export function addEventListeners(
  motsButton,
  phrasesButton,
  startGame
) {
  motsButton.addEventListener('click', () => {
    startGame("mot");
  });

  phrasesButton.addEventListener('click', () => {
    startGame("phrase");
  });
}

export function addKeyDownEventListener(
  zonetext,
  zonetextValue,
  choix,
  score,
  scoreElement,
  config,
  texteElement
) {
  zonetext.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const motEcrire = zonetextValue;
      zonetextValue = '';
      const type = choix;
      const texteChoisi = texteElement.textContent;
      if (motEcrire === texteChoisi) {
        score++;
        scoreElement.textContent = "Score : " + score;
        texteElement.textContent = config[type + "Aleatoire"]();
      } else {
        texteElement.style.backgroundColor = '#da9a34e1';
        setTimeout(() => {
          texteElement.style.backgroundColor = '';
        }, 300);
      }
    }
  });
}
