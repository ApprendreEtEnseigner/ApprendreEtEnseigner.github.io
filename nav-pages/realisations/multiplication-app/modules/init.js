import { getNumbers } from "./getNumbers.js";
import { initSelectors } from "./initSelectors.js";

/**
 ** init() pour... Initialiser l'application en récupérant les nombres et en insérant la question dans l'élément HTML.
 * @returns {number} Le résultat de la multiplication des deux nombres.
 */

export const init = () => {
  const { num1, num2 } = getNumbers();
  const { questionEl } = initSelectors();
  //* verifier que questionEl n’est pas null ou undefined avant de modifier son innerText.
  if (questionEl) {
    questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;
  } else {
    console.error("Element questionEl non trouvé.");
  }

  return num1 * num2;
};
