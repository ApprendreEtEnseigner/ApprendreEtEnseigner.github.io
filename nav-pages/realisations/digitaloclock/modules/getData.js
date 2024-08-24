//! getData pour... recuperer les donnees de l'ordinateur
export const getData = () => {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let ampm = "AM";

  //* Le ampmEl ne peut pas etre obtenu a partir de l'ordi, donc on va user la logique
  if (h >= 12) {
    if (h > 12) {
      h = h - 12;
    }
    ampm = "PM";
  } else if (h === 0) {
    h = 12;
  }

  return { h, m, s, ampm };
};
