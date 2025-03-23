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
horizontalRule.style.width = "100%";

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

// USER INTERACTION and GRADE CALCULATION
// -------------------------------------
// Collect user input, process the score, and display personalized results

// Select DOM Elements
const greetStudent = document.querySelector("#greet");
const studentGrade = document.querySelector("#grade");
const greetContainer = document.querySelector(".greet-container");
const gradeScaleContainer = document.querySelector(".grade-scale-container");
const reloadPage = document.querySelector("#reload");
const footerContainer = document.querySelector(".footer-container");

// Prompt the user to enter their name
const askForName = () => {
  const studentName = prompt("Please Enter Your Name:");

  getName(studentName);
};
askForName();

// Function to process the name and display it on the page
function getName(name) {
  if (!name || name.trim() === "") {
    name = "Student";
  }

  if (
    name.length > 1 &&
    name.trim() !== "" &&
    /^[a-zA-ZçğıöşüÇĞİÖŞÜ]+$/.test(name) // Accepts only English and Turkish letters (no spaces)
    // && /^[A-Za-z]+$/.test(name) // Accepts only English letters
  ) {
    // Greet the student with a personalized message
    greetStudent.classList.add(
      "bg-info",
      "bg-opacity-75",
      "border",
      "border-info",
      "rounded",
      "mb-3",
      "fw-bold",
      "p-3",
      "d-inline-block"
    );

    greetStudent.textContent = `Hi ${name.charAt(0).toUpperCase()}${name
      .slice(1)
      .toLowerCase()}!`;
    // Alternative approach:
    // greetStudent.textContent =
    //   name[0].toUpperCase() + name.slice(1).toLowerCase() + "!";

    // Remove "d-none" class to make the containers visible
    [greetContainer, reloadPage, footerContainer].forEach((container) =>
      container.classList.remove("d-none")
    );
  } else {
    alert(`Invalid Name! \nPlease enter a valid name.`);

    askForName();
  }
}

// Prompt the user to enter their score and parse it as an integer
let score = parseInt(prompt("Please Enter Your Score:"), 10);

// Hold the grade and define emoji symbols
let grade;
const SMILE = "😀";
const SAD = "☹️";

// Check if the score is a valid number between 0 and 100
// if (!isNaN(score) && score >= 0 && score <= 100)
if (Number.isFinite(score) && score >= 0 && score <= 100) {
  grade = SMILE; // Initialize grade with a smiley face
  studentGrade.classList.add(
    "p-3",
    "border",
    "border-info",
    "border-5",
    "rounded",
    "w-25",
    "fw-bold",
    "fs-4",
    "text-success"
  );

  // Determine the grade based on the score range
  if (score >= 90) {
    grade += " AA"; // Excellent
  } else if (score >= 85) {
    grade += " BA"; // Very Good
  } else if (score >= 80) {
    grade += " BB"; // Good
  } else if (score >= 75) {
    grade += " CB"; // Fairly Good
  } else if (score >= 70) {
    grade += " CC"; // Satisfactory
  } else if (score >= 65) {
    grade += " DC"; // Close to Passing
  } else if (score >= 60) {
    grade += " DD"; // Passing
  } else if (score >= 50) {
    grade += " FD"; // Barely Passing
  } else {
    // If score is below 50, set the grade to "FF" and change the text color to red
    grade = `${SAD} FF`; // Fail

    studentGrade.classList.remove("text-success");
    studentGrade.classList.add("text-danger");
  }

  const gradeScale = `<h3>Grade Scale</h3>
  <ul>
    <li>
      <span class="fw-bold">AA:</span> 90-100
      <span class="fst-italic">(Excellent)</span>
    </li>
    <li>
      <span class="fw-bold">BA:</span> 85-89
      <span class="fst-italic">(Very Good)</span>
    </li>
    <li>
      <span class="fw-bold">BB:</span> 80-84
      <span class="fst-italic">(Good)</span>
    </li>
    <li>
      <span class="fw-bold">CB:</span> 75-79
      <span class="fst-italic">(Fairly Good)</span>
    </li>
    <li>
      <span class="fw-bold">CC:</span> 70-74
      <span class="fst-italic">(Satisfactory)</span>
    </li>
    <li>
      <span class="fw-bold">DC:</span> 65-69
      <span class="fst-italic">(Close to Passing)</span>
    </li>
    <li>
      <span class="fw-bold">DD:</span> 60-64
      <span class="fst-italic">(Passing)</span>
    </li>
    <li>
      <span class="fw-bold">FD:</span> 50-59
      <span class="fst-italic">(Barely Passing)</span>
    </li>
    <li>
      <span class="fw-bold">FF:</span> 0-49
      <span class="fst-italic">(Fail)</span>
    </li>
  </ul>`;

  gradeScaleContainer.insertAdjacentHTML("afterbegin", gradeScale);

  studentGrade.textContent = `${grade} (${score})`;
} else {
  // If the score is not a valid number, display a warning message
  grade = `Please enter a valid number between 0 and 100!`;

  studentGrade.classList.add(
    "bg-warning",
    "text-center",
    "rounded",
    "fs-5",
    "p-3"
  );

  studentGrade.innerHTML = `${grade} ${
    !Number.isFinite(score)
      ? ""
      : `<span class="text-danger text-decoration-line-through fst-italic">(${score})<span>`
  }`;
}

// RELOAD BUTTON
// -------------
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
