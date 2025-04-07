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

// Function to ask for the user's name
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
  // Array of days in the week (Sunday to Saturday)
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

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

  // Get the current date and time using the Date object
  const now = new Date();

  // Get the current day of the month (1-31)
  // let date = now.getDate().toString().padStart(2, "0");
  let date = `${now.getDate()}`.padStart(2, 0);

  // Get the current month (1-12). Adding 1 because getMonth() is 0-based.
  // let month = (now.getMonth() + 1).toString().padStart(2, "0");
  let month = `${now.getMonth() + 1}`.padStart(2, 0);

  // Get the current year (e.g., 2025)
  let year = now.getFullYear();

  // Get the current weekday
  let weekday = days[now.getDay()];

  // Get the current day's emoji
  let emoji = emojis[now.getDay()];

  // Get the current hour (0-23)
  let hour = `${now.getHours()}`.padStart(2, 0);

  // Get the current minute (0-59)
  let minute = `${now.getMinutes()}`.padStart(2, 0);

  // Get the current second (0-59)
  let second = `${now.getSeconds()}`.padStart(2, 0);

  /*
  // Alternative approach:
  const now = new Date();
  let date = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let weekday = days[now.getDay()];
  let emoji = emojis[now.getDay()];

  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  // Format the date and time to always show two digits
  date = date < 10 ? "0" + date : date;
  month = month < 10 ? "0" + month : month;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  */

  // Display the formatted date, day and time
  currentDate.textContent = `${date}/${month}/${year} - ${weekday} ${emoji}`;
  currentTime.textContent = `${hour}:${minute}:${second}`;

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
NOTE:
For Bootstrap classes used in script.js, refer to 
https://getbootstrap.com/docs/5.3/getting-started/introduction/
*/
