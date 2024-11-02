export const initSelectors = () => {
  const questionEl = document.getElementById("question");
  const formEl = document.getElementById("form");
  const inputEl = document.getElementById("input");
  const scoreEl = document.getElementById("score");

  return { questionEl, formEl, inputEl, scoreEl };
};
