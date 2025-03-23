"use strict";

// STYLES
// ------
// Create a <style> element, define the styles, and append it to the document's head.
const styles = document.createElement("style");

styles.innerHTML = `
body {
  background-color: #ced4da;
  font-family: "Roboto", Tahoma, sans-serif;
  padding-bottom: 60px;
}
 
.custom-hr {
  border: 3px solid #212529;
  border-radius: 3px;
}

.github-link {
  color: #f8f9fa;
  transition: transform 0.5s ease;
}

.github-link:hover {
  color: #0d6efd;
  transform: scale(1.3);
}
`;

document.head.appendChild(styles);
/*
// Alternative approach:
// <body> element
const body = document.body;

body.classList.add("bg-dark-subtle"); // #ced4da
body.style.fontFamily = "Roboto, Tahoma, sans-serif";
body.style.paddingBottom = "60px";

// <hr> element
const horizontalRule = document.querySelector(".custom-hr");

horizontalRule.style.border = "3px solid rgb(33, 37, 41)";
horizontalRule.style.borderRadius = "3px";

// <a> element
const githubLink = document.querySelector(".github-link");

githubLink.style.color = "#f8f9fa";
githubLink.style.transition = "transform 0.5s ease";

githubLink.addEventListener("mouseover", () => {
  githubLink.style.color = "#0d6efd";
  githubLink.style.transform = "scale(1.3)";
});

githubLink.addEventListener("mouseout", () => {
  githubLink.style.color = "#f8f9fa";
  githubLink.style.transform = "scale(1)";
});
*/

// DOM ELEMENT SELECTION
// ---------------------
// Select DOM Elements
const counter = document.querySelector("#counter");
const increaseCounter = document.querySelector("#increase");
const decreaseCounter = document.querySelector("#decrease");
const resetCounter = document.querySelector("#reset");
const reloadPage = document.querySelector("#reload");

// COUNTER
// -------
// Retrieve the 'count' value from localStorage.
// If it exists, convert it to a number; otherwise, set it to 0.
let counterValue = localStorage.getItem("count")
  ? Number(localStorage.getItem("count"))
  : 0;

// Set the counter element's text to the current value.
counter.textContent = counterValue;

// Add event listeners for increase and decrease buttons
[increaseCounter, decreaseCounter].forEach((element) =>
  element.addEventListener("click", clickEvent)
);
/*
// Alternative approach:
increaseCounter.addEventListener("click", clickEvent);
decreaseCounter.addEventListener("click", clickEvent);
*/

// Click event handler function
function clickEvent() {
  this.id === "increase" ? (counterValue += 1) : (counterValue -= 1);
  counter.textContent = counterValue; // Update counter display
  localStorage.setItem("count", counterValue); // Update localStorage
}
/*
// Alternative approach:
[increaseCounter, decreaseCounter].forEach((element) =>
  element.addEventListener("click", function () {
    this.id === "increase" ? (counterValue += 1) : (counterValue -= 1);
    counter.textContent = counterValue;
    localStorage.setItem("count", counterValue);
  })
);
*/

// RESET & RELOAD BUTTONS
// ----------------------
// Add a click event listener to the reset button to reset the counter
resetCounter.addEventListener("click", () => {
  counterValue = 0; // Reset the counter value to 0
  counter.textContent = counterValue; // Update the displayed counter value
  localStorage.setItem("count", counterValue); // Store the reset value in localStorage
});

// Add a click event listener to the reload button to reload the page
reloadPage.addEventListener("click", () => {
  window.location.reload();
});
// Alternatively, this can be added directly in the HTML reload button as an inline event handler:
// onclick="window.location.reload();"

/*
NOTE:
For Bootstrap classes used in script.js, refer to 
https://getbootstrap.com/docs/5.3/getting-started/introduction/
*/
