//! Imports de toutes les fonctions depuis le dossier modules.
import { init } from "./modules/init.js";
import { submitUserAnswer } from "./modules/submitUserAnswer.js";
import { initSelectors } from "./modules/initSelectors.js";
import { displayScore, getScore, updateScore } from "./modules/scoreUtils.js";

/**
 ** initializeApp() pour... Initialiser l'application et met à jour le score.
 */
const initializeApp = () => {
  init();
  submitUserAnswer();

  const { scoreEl } = initSelectors();
  //* verifier que scoreEl n’est pas null ou undefined avant de modifier son innerText.
  if (scoreEl) {
    let score = getScore();
    displayScore(scoreEl, score);
  } else {
    console.error("Element scoreEl non trouvé.");
  }
};

//* Appel de la fonction d'initialisation
initializeApp();
