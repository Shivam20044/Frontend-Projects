// script.js

const body         = document.body;
const feedback_name= document.querySelectorAll(".feedback-name");
const feedback_box = document.querySelectorAll(".feedback-box");
const button       = document.querySelector("button");
const main_con     = document.querySelector(".main-container");

let selectedName = null;

// 1️⃣ Loop over every box
feedback_box.forEach((box, idx) => {
  box.addEventListener("click", function() {
    // clear previous selection
    feedback_box.forEach(b => b.classList.remove("selected"));
    // mark this one
    this.classList.add("selected");
    // grab the matching name by index
    selectedName = feedback_name[idx].textContent;
  });
});

// 2️⃣ On clicking the button
button.addEventListener("click", function() {
  if (!selectedName) {
    alert("Please select your feedback first!");
  } else {
    console.log("User selected:", selectedName);
     main_con.innerHTML = `
      <p class="fdk">Feedback Submitted ❤️‍🔥</p><br/>
      <h2 class="fdk">Your feedback: ${selectedName}</h2>
    `;
    // … send `selectedName` to your server or whatever …
  }
});
