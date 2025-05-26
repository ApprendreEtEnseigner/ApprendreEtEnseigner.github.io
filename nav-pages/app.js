// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfQDyJCvO8qvvUAXxnU-wyhE34eR31HsU",
  authDomain: "fir-jscrud-7a1b8.firebaseapp.com",
  databaseURL: "https://fir-jscrud-7a1b8-default-rtdb.firebaseio.com/",
  projectId: "fir-jscrud-7a1b8",
  storageBucket: "fir-jscrud-7a1b8.firebasestorage.app",
  messagingSenderId: "738417503585",
  appId: "1:738417503585:web:cdd91096a1c5dbc566a920",
  measurementId: "G-D07SPM5WGB",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// setup variables
let db = firebase.database();
let reviews = document.getElementById("reviews");
let reviewsRef = db.ref("/reviews");
const reviewForm = document.getElementById("reviewForm");

reviewForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent reloading
  let fullName = document.getElementById("fullName");
  let message = document.getElementById("message");
  let hiddenId = document.getElementById("hiddenId");
  let id = hiddenId.value || Date.now();
  const articleHref = window.location.pathname;

  db.ref("reviews/" + id).set({
    fullName: fullName.value,
    message: message.value,
    createdAt: firebase.database.ServerValue.TIMESTAMP,
    articleHref: articleHref,
  });
  clearForm();
});

function updateCommentsCount() {
  const articleHref = window.location.pathname;
  let count = 0;

  document.querySelectorAll("#reviews li").forEach(() => count++);

  const commentsCountEl = document.getElementById("commentsCount");
  commentsCountEl.textContent =
    count < 2 ? `${count} Commentaire ` : `${count} Commentaires `;
}

reviewsRef.on("child_added", (data) => {
  const review = data.val();
  const articleHref = window.location.pathname;

  if (review.articleHref === articleHref) {
    let li = document.createElement("li");
    li.id = data.key;
    li.innerHTML = reviewTemplate(review);
    reviews.appendChild(li);
    updateCommentsCount();
  }
});

reviews.addEventListener("click", (e) => {
  updateReview(e);
  deleteReview(e);
});

reviewsRef.on("child_changed", (data) => {
  let reviewNode = document.getElementById(data.key);
  reviewNode.innerHTML = reviewTemplate(data.val());
});

reviewsRef.on("child_removed", (data) => {
  let reviewNode = document.getElementById(data.key);
  reviewNode.parentNode.removeChild(reviewNode);
});

function deleteReview(e) {
  let reviewNode = e.target.closest("li");

  if (e.target.classList.contains("delete")) {
    let id = reviewNode.id;
    db.ref("reviews/" + id).remove();

    clearForm();
    updateCommentsCount();
  }
}

function updateReview(e) {
  let reviewNode = e.target.closest("li");

  if (e.target.classList.contains("edit")) {
    fullName.value = reviewNode.querySelector(".fullName").innerText;
    message.value = reviewNode.querySelector(".message").innerText;

    hiddenId.value = reviewNode.id;
    Materialize.updateTextFields();
  }
}

function clearForm() {
  fullName.value = "";
  message.value = "";
  hiddenId.value = "";
}

function reviewTemplate({ fullName, message, createdAt }) {
  const date = new Date(createdAt);

  const jour = String(date.getDate()).padStart(2, "0");
  const mois = String(date.getMonth() + 1).padStart(2, "0");
  const annee = date.getFullYear();

  const heures = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const dateFormatted = `${jour}/${mois}/${annee}`;
  const hourFormatted = `${heures}:${minutes}`;

  return `
  <div class="comment-item">  
    <div>
        <label class="fullName"><strong>${fullName}</strong></label>
    </div>

        <div>
        <label class="createdAt">Le ${dateFormatted} à ${hourFormatted}</label>
    </div>

    <div>
        <label class="message"><strong>${message}</strong></label>
    </div>
  </div>
  <br><hr>

  <!-- 
    <button class="waves-effect waves-light btn delete">Delete</button>
    <button class="waves-effect waves-light btn edit">Update</button>
    <br/><br/><br/>
  -->
  `;
}

document.addEventListener("DOMContentLoaded", updateCommentsCount);
