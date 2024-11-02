import { init } from "./init.js";
import { initSelectors } from "./initSelectors.js";
import { displayScore, updateScore, getScore } from "./scoreUtils.js";

/**
 ** submitUserAnswer() pour... Gérer la soumission des réponses de l'utilisateur.
 */

export const submitUserAnswer = () => {
  const { formEl, inputEl, scoreEl } = initSelectors();

  if (!formEl || !inputEl || !scoreEl) {
    console.error("Un ou plusieurs éléments HTML nécessaires sont manquants.");
    return;
  }

  let correctAns = init();

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const answerUser = parseInt(inputEl.value);
    let score = getScore();

    if (answerUser === correctAns) {
      score++;
    } else {
      score--;
    }

    updateScore(score);
    inputEl.value = "";
    displayScore(scoreEl, score);
    correctAns = init();
  });
};
