"use strict";

// STYLES
// ------
// Create a <style> element, define the styles, and append it to the document's head.
const styles = document.createElement("style");

styles.innerHTML = `
body {
  background-color: #212529;
  font-family: "Roboto", Tahoma, sans-serif;
  padding-bottom: 60px;
}

body.active {
  background-color: #0dcaf0;
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

document.head.append(styles);

// SELECT DOM ELEMENTS
// -------------------
const buttonContainer = document.querySelector(".button-container"); // <div>
const startButton = document.querySelector("#start"); // <button>
const userClockContainer = document.querySelector(".user-clock-container"); // <div>
const userName = document.querySelector("#username"); // <span>
const currentDate = document.querySelector("#current-date"); // <span>
const currentTime = document.querySelector("#current-time"); // <span>

// CLOCK & GREET
// -------------
// When the window has fully loaded, hide the user clock container by adding the "d-none" class
window.addEventListener("load", () => {
  userClockContainer.classList.add("d-none");
});
// Alternative approach:
// window.onload = () => {
//   userClockContainer.classList.add("d-none");
// };

// "Click to Start" button
startButton.addEventListener("click", () => {
  askForName();
});

// Prompt the user to enter their name
function askForName() {
  const inputName = prompt("Please Enter Your Name:");
  getName(inputName);
}

// Function to process the name and display it on the page
function getName(name) {
  if (
    name.length > 1 &&
    name.trim() !== "" &&
    /^[a-zA-ZçğıöşüÇĞİÖŞÜ]+$/.test(name) // Accepts only English and Turkish letters (no spaces)
    // /^[A-Za-z]+$/.test(name) // Accepts only English letters
  ) {
    userName.textContent = `${name.charAt(0).toUpperCase()}${name
      .slice(1)
      .toLowerCase()}!`;
    // Alternative approach:
    // userName.textContent =
    //   name[0].toUpperCase() + name.slice(1).toLowerCase() + "!";

    showTime();
    setInterval(showTime, 1000);
  } else {
    alert(`Invalid Name! \nPlease enter a valid name.`);
    askForName();
  }
}

// Function to display the current date and time
function showTime() {
  // Formatting options for date and time
  const optionsDate = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    weekday: "long",
  };

  const optionsTime = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  // Array of emojis
  const emojis = [
    "☀️", // Sunday
    "💼", // Monday
    "📝", // Tuesday
    "🤔", // Wednesday
    "🍕", // Thursday
    "🎉", // Friday
    "🎮", // Saturday
  ];

  const now = new Date();
  let emoji = emojis[now.getDay()];

  const formatDate = function (date, locale, option) {
    return Intl.DateTimeFormat(locale, option).format(date);
  };

  const dateNow = formatDate(now, "en-GB", optionsDate);
  const timeNow = formatDate(now, "en-GB", optionsTime);

  // Display the formatted date, day and time
  currentDate.textContent = `${dateNow} ${emoji}`;
  currentTime.textContent = timeNow;

  // Styling changes
  buttonContainer.classList.add("d-none");
  userClockContainer.classList.remove("d-none");
  document.body.classList.add("active");
  // styles.innerHTML += `
  //   body {
  //     background-color: #0dcaf0;
  //   }
  //   `;

  [currentDate, currentTime].forEach((element) =>
    element.classList.add("text-light", "fw-bold")
  );
}

/*
// Alternative approach to showTime() function:
function showTime() {
  // Formatting options for date and time
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  // Array of emojis
  const emojis = [
    "☀️", // Sunday
    "💼", // Monday
    "📝", // Tuesday
    "🤔", // Wednesday
    "🍕", // Thursday
    "🎉", // Friday
    "🎮", // Saturday
  ];

  const now = new Date();
  let emoji = emojis[now.getDay()];

  const formatDate = function (date, locale, option) {
    return Intl.DateTimeFormat(locale, option).format(date);
  };

  const timeNow = formatDate(now, "en-GB", options);
  // const timeNow = formatDate(now, navigator.language, options); // dynamic locale

  // Display the formatted date, day, time and remove the parent <p> element of the "currentTime"
  currentDate.textContent = `${timeNow} ${emoji}`;
  currentTime.parentElement.remove();

  // Styling changes
  buttonContainer.classList.add("d-none");
  userClockContainer.classList.remove("d-none");
  document.body.classList.add("active");
  // styles.innerHTML += `
  //   body {
  //     background-color: #0dcaf0;
  //   }
  //   `;

  [currentDate, currentTime].forEach((element) =>
    element.classList.add("text-light", "fw-bold")
  );
}
*/

/*
NOTE:
For Bootstrap classes used in script.js, refer to 
https://getbootstrap.com/docs/5.3/getting-started/introduction/
*/
