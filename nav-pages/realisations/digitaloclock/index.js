//! imports de toutes les fonctions depuis les fichiers séparés.
import { init } from "./modules/init.js";
import { getData } from "./modules/getData.js";
import { formatTime } from "./modules/formatTime.js";
import { displayTime } from "./modules/displayTime.js";

const { hourEl, minutesEl, secondesEl, ampmEl } = init();

//! setInterval Pour... metre a jour periodiquement, displayTime sans avoir besoin de rappeler manuellement displayTime.
setInterval(() => {
  const timeData = getData();
  const formatedTimeData = formatTime(timeData);
  displayTime(formatedTimeData, { hourEl, minutesEl, secondesEl, ampmEl });
}, 1000);
