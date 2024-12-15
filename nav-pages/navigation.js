let buttons = document.querySelectorAll(".btn.dark");
let buttonsDefis = document.querySelectorAll(".btn.dark.defis");

let titles = document.querySelectorAll(".title-theme h2");
let titlesDefis = document.querySelectorAll(".title-module h2");

let contents = document.querySelectorAll(
  ".content-articles, .content-videos, .content-slides, .content-podcasts"
);
let contentsDefis = document.querySelectorAll(
  ".content-penseealgorithmique, .content-technicieninformatique, .content-devwebfrontend, .content-python, .content-linux, .content-langager, .content-basededonnees"
);

titles.forEach((title) => {
  title.style.display = "none";
});

titlesDefis.forEach((title) => {
  title.style.display = "none";
});

contents.forEach((content) => {
  content.style.display = "none";
});

contentsDefis.forEach((content) => {
  content.style.display = "none";
});

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

buttonsDefis.forEach((button) => {
  button.addEventListener("click", handleDefisClick);
});

if (titles.length > 0) {
  titles[0].style.display = "block";
}
if (contents.length > 0) {
  contents[0].style.display = "block";
}

if (titlesDefis.length > 0) {
  titlesDefis[0].style.display = "block";
}
if (contentsDefis.length > 0) {
  contentsDefis[0].style.display = "block";
}

function handleClick(event) {
  let id = event.target.getAttribute("href").slice(1);

  titles.forEach((title) => {
    title.style.display = "none";
  });

  contents.forEach((content) => {
    content.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
  document.querySelector(".content-" + id).style.display = "block";
}

function handleDefisClick(event) {
  let id = event.target.getAttribute("href").slice(1);

  titlesDefis.forEach((title) => {
    title.style.display = "none";
  });

  contentsDefis.forEach((content) => {
    content.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
  document.querySelector(".content-" + id).style.display = "block";
}

// ------------------------------
