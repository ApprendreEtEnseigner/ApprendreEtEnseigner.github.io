/**
 ** getScore() pour... Récupérer le score depuis le localStorage.
 */
export const getScore = () => {
  //* Pour... S’assurer que les opérations sur localStorage se déroulent correctement.
  try {
    return JSON.parse(localStorage.getItem("score")) || 0;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du score depuis le localStorage:",
      error
    );
    return 0;
  }
};

/**
 ** updateScore() pour... Met à jour le score dans le localStorage.
 * @param {number} score - Le nouveau score à enregistrer.
 */
export const updateScore = (score) => {
  try {
    localStorage.setItem("score", JSON.stringify(score));
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour du score dans le localStorage:",
      error
    );
  }
};

/**
 ** displayScore() pour... Afficher le score dans l'élément HTML spécifié.
 * @param {HTMLElement} scoreEl - L'élément HTML où afficher le score.
 * @param {number} score - Le score à afficher.
 */
export function displayScore(scoreEl, score) {
  if (scoreEl) {
    scoreEl.innerText = `score: ${score}`;
  } else {
    console.error("Element scoreEl non trouvé.");
  }
}
