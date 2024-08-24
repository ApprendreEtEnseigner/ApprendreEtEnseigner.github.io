//! formatTime pour... gerer l'affichage de 0 ou non au niveau de l'heure, minute, seconde
export const formatTime = ({ h, m, s, ampm }) => {
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  return { h, m, s, ampm };
};
