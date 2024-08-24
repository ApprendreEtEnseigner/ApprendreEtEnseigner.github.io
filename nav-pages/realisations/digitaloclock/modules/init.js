//! Pour recuperer les element HTML via leurs id respectifs
export const init = () => {
  const hourEl = document.getElementById("hour");
  const minutesEl = document.getElementById("minutes");
  const secondesEl = document.getElementById("secondes");
  const ampmEl = document.getElementById("ampm");

  return { hourEl, minutesEl, secondesEl, ampmEl };
};
