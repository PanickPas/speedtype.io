import * as config from './config.js';

let score = 0;
let timer;
let countdown = 60; // Temps en secondes pour le timer

// Déclaration de la variable contenant le choix de l'utilisateur
let choix = null;

// Récupérer les éléments HTML pour le texte, la zone de texte, le bouton Mots, le bouton Phrases, le score et le timer
const texteElement = document.getElementById('text');
const zonetext = document.getElementById('zonetext');
const motsButton = document.querySelector('.mots');
const phrasesButton = document.querySelector('.phrases');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// Fonction pour mettre à jour le timer
function updateTimer() {
  timerElement.textContent = "Temps restant : " + countdown + "s";
  if (countdown <= 0) {
    endGame();
  }
  countdown--;
}

// Fonction pour terminer le jeu
function endGame() {
  zonetext.disabled = true;
  clearInterval(timer);
  texteElement.textContent = "Temps écoulé, votre score est de " + score;
  
  // Activer les boutons Mots et Phrases
  motsButton.disabled = false;
  phrasesButton.disabled = false;
}

// Fonction pour réinitialiser le jeu
function resetGame() {
  score = 0;
  scoreElement.textContent = "Score : 0";
  timerElement.textContent = "Temps restant : 60s";
  zonetext.value = "";
  zonetext.disabled = true;
  texteElement.textContent = "Choisissez Mots ou Phrases pour commencer";
  motsButton.disabled = false;
  phrasesButton.disabled = false;
  // Réinitialiser la couleur de fond de la zone de mots aléatoires
  texteElement.style.backgroundColor = '';
}

// Fonction générique pour commencer le jeu
function startGame(type) {
  if (choix === null || score > 0) {
    resetGame();
    choix = type;
    texteElement.textContent = "Prêt à jouer. Tapez " + type + " ci-dessus.";
    zonetext.disabled = false;
    motsButton.disabled = true;
    phrasesButton.disabled = true;
    countdown = 60; // Réinitialiser le timer
    timer = setInterval(updateTimer, 1000); // Démarrer le timer
  }
  texteElement.textContent = config[type + "Aleatoire"]();
}

// Ajouter des écouteurs d'événements pour les boutons Mots et Phrases
motsButton.addEventListener('click', () => {
  startGame("mot");
});

phrasesButton.addEventListener('click', () => {
  startGame("phrase");
});

// Ajouter un écouteur d'événement pour la zone de texte
zonetext.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const motEcrire = zonetext.value;
    zonetext.value = '';
    const type = choix;
    const texteChoisi = texteElement.textContent;
    if (motEcrire === texteChoisi) {
      score++;
      scoreElement.textContent = "Score : " + score;
      texteElement.textContent = config[type + "Aleatoire"]();
    } else {
      // Changer la couleur de fond en orange pour signaler un mot incorrect
      texteElement.style.backgroundColor = '#da9a34e1';

      // Réinitialiser la couleur de fond après 2 secondes
      setTimeout(() => {
        texteElement.style.backgroundColor = '';
      }, 300);
    }
  }
});

// Réinitialiser le jeu au chargement de la page
resetGame();
