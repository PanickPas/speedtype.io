function listeMots() {
  const mots = [
    "Pomme", "Banane", "Orange", "Fraise", "Citron", "Poire", "Raisin", "Kiwi", "Ananas", "Pamplemousse",
    "Cerise", "Mangue", "Pêche", "Abricot", "Framboise", "Pastèque", "Melon", "Noix", "Amande", "Noisette",
    "Chocolat", "Vanille", "Caramel", "Café", "Thé", "Lait", "Eau", "Soda", "Jus d'orange",
    "Chien", "Chat", "Oiseau", "Lapin", "Poisson", "Tigre", "Lion", "Serpent", "Eléphant", "Girafe",
    "Avion", "Voiture", "Train", "Vélo", "Bateau", "Fusée", "Hélicoptère", "Bus", "Métro", "Tramway",
    "Ecole", "Université", "Professeur", "Etudiant", "Livres", "Crayon", "Tableau", "Classe", "Salle", "Education",
    "Soleil", "Lune", "Etoile", "Planète", "Galaxie", "Astéroïde", "Comète", "Satellite", "Exploration", "Espace",
    "Musique", "Danse", "Chanson", "Instruments", "Orchestre", "Mélodie", "Rythme", "Harmonie", "Artiste", "Concert",
    "Bonheur", "Amour", "Joie", "Paix", "Sérénité", "Rires", "Sourire", "Famille", "Amitié", "Bien-être"
  ];
  return mots;
}

export function motAleatoire() {
  const mots = listeMots();
  const motAleatoire = mots[Math.floor(Math.random() * mots.length)];
  return motAleatoire;
}

function listePhrases() {
  const phrases = [
    "Le soleil brille, illuminant le ciel d'une lueur dorée en cette matinée calme.",
    "L'océan s'étend à perte de vue, ses vagues caressant doucement le rivage.",
    "La forêt dense abrite une variété de créatures mystérieuses et fascinantes.",
    "La nuit étoilée nous rappelle l'immensité de l'univers et notre place insignifiante.",
    "L'amour sincère résiste à l'épreuve du temps, inaltérable et éternel dans nos cœurs.",
    "La montagne majestueuse défie le ciel, offrant un défi pour les alpinistes intrépides.",
    "La musique mélodieuse apaise l'âme, évoquant des émotions profondes et variées.",
    "L'artiste créatif puise dans son âme pour donner naissance à des chefs-d'œuvre uniques.",
    "L'amitié loyale est un trésor inestimable, un lien qui transcende les années.",
    "La patience révèle sa valeur dans l'attente, dans la promesse d'un avenir meilleur.",
    "La sagesse se gagne avec l'expérience, forgeant un esprit fort et perspicace.",
    "La nature, dans toute sa splendeur, inspire un sentiment de paix intérieure profonde.",
    "Le respect mutuel est la base solide de toutes relations harmonieuses et durables.",
    "Le courage, c'est affronter l'inconnu avec détermination, malgré la peur qui persiste.",
    "Le voyage imprègne l'âme d'aventure, découvrant de nouveaux horizons et cultures.",
    "La créativité donne naissance à des idées novatrices, propulsant l'innovation et la progression.",
    "La confiance en soi est la clé pour surmonter les obstacles et réaliser ses rêves.",
    "Le sourire chaleureux éclaire le visage, répandant de la joie et du bonheur partout.",
    "La gourmandise réside dans la diversité des goûts, offrant une expérience culinaire riche.",
    "Le thé apaise l'esprit, créant une parenthèse de calme au milieu du chaos quotidien.",
    "L'avenir est rempli de promesses, avec des possibilités infinies à explorer et à réaliser.",
    "La danse est l'expression de la joie, faisant vibrer les corps au rythme de la musique.",
    "Le silence a le pouvoir d'apaiser l'âme, offrant un refuge dans le tumulte du monde.",
    "La compassion envers les autres apporte du réconfort et renforce les liens humains.",
    "L'exploration des étoiles réveille notre curiosité et notre soif d'aventure cosmique.",
    "La générosité éclaire le monde, un acte d'amour qui change des vies entières.",
    "La simplicité de la vie quotidienne renferme une beauté discrète mais profonde.",
    "Le théâtre est un art vivant, où l'imagination prend vie sur scène, captivant les spectateurs.",
    "Le bonheur réside dans l'appréciation des petits moments qui illuminent notre existence.",
    "L'éducation est une clé puissante, ouvrant les portes de la connaissance et de l'avenir."
];
  return phrases;
}

export function phraseAleatoire() {
  const phrases = listePhrases();
  const phraseAleatoire = phrases[Math.floor(Math.random() * phrases.length)];
  return phraseAleatoire;
}
