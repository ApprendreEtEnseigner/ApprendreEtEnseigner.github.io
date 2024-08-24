//! displayTime Pour... remplacer le contenu des elements <strong></strong>, via l'attribut/propriete textContent
export const displayTime = (
  { h, m, s, ampm },
  { hourEl, minutesEl, secondesEl, ampmEl }
) => {
  hourEl.textContent = h;
  minutesEl.textContent = m;
  secondesEl.textContent = s;
  ampmEl.textContent = ampm;
};
