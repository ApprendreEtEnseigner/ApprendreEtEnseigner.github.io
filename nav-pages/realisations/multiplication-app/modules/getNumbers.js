/**
 ** getNumbers() pour... Générer deux nombres aléatoires pour des opérations de multiplication.
 * @param {number} min - La valeur minimale de la plage.
 * @param {number} max - La valeur maximale de la plage.
 * @returns {Object} Un objet contenant deux nombres aléatoires.
 */
export const getNumbers = (min = 1, max = 10) => {
  const num1 = Math.ceil(Math.random() * (max - min + 1)) + min - 1;
  const num2 = Math.ceil(Math.random() * (max - min + 1)) + min - 1;

  return { num1, num2 };
};
