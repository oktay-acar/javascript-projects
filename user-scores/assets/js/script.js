"use strict";

document.addEventListener("DOMContentLoaded", function () {
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

  input::placeholder {
    font-style: italic;
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
  const alertContainer = document.querySelector("#alert-container"); // <div>
  const listContainer = document.querySelector("#list-container"); // <div>
  const userForm = document.querySelector("#user-form"); // <form>
  const userName = document.querySelector("#username"); // <input>
  const userScore = document.querySelector("#score"); // <input>
  const userList = document.querySelector("#user-list"); // <ul>
  const clearButton = document.querySelector("#clear"); // <button>

  // ALERT FUNCTION
  // --------------
  // Return a dynamic alert message with customizable title, message, and alert type (success, danger, info)
  const alertFunction = (title, message, alertType = "danger") => {
    const icon =
      alertType === "danger"
        ? `<i class="fa-solid fa-triangle-exclamation text-danger fs-5"></i>`
        : alertType === "success"
        ? `<i class="fa-solid fa-circle-check text-success fs-5"></i>`
        : `<i class="fa-solid fa-circle-info text-info"></i>`;

    const alertHTML = `<div class="alert alert-${alertType} alert-dismissible fade show ps-4 fixed-top" role="alert">
       ${icon} <strong>${title}</strong> <br />${message}</div>`;

    // Below code: The 'btn-close' class on the button element works when
    // the Bootstrap 5.3.3 Bundle (including Popper) is activated on the index.html page.
    /*
    const alertHTML = `<div class="alert alert-${alertType} alert-dismissible fade show ps-4 fixed-top" role="alert">
       ${icon} <strong>${title}</strong> <br />${message}<button
          type="button"
          class="btn-close shadow-none"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>`;
    */
    return alertHTML;
  };

  // LIST ITEM CREATION
  // ------------------
  const addItem = (name, score) => {
    // <li>
    let listElement = document.createElement("li");

    listElement.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "justify-content-between",
      "p-3"
    );

    // <span>: The user's name and score
    listElement.innerHTML = `${name}<span class="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle rounded-pill p-2">Score: ${score}</span>`;

    userList.append(listElement);
  };

  // CLEAR ALERT
  // -----------
  function clearAlert() {
    setTimeout(() => {
      alertContainer.innerHTML = "";
    }, 3500);
  }

  // FORM HANDLER
  // ------------
  // Form submission
  userForm.addEventListener("submit", formHandler);

  // When the form is submitted
  function formHandler(e) {
    e.preventDefault();

    const score = parseInt(userScore.value, 10);

    // Check username field
    if (
      userName.value.length <= 1 ||
      userName.value.length >= 10 ||
      userName.value.trim() === "" ||
      !/^[a-zA-Z]+$/.test(userName.value)
    ) {
      // Display warning alert
      alertContainer.innerHTML = alertFunction(
        "Warning!",
        "Please enter a valid username (letters only, no spaces, 2 to 10 characters)!",
        "danger"
      );
      clearAlert();
      return;
    }

    // Check score field
    if (
      userScore.value.trim() === "" ||
      !isFinite(score) ||
      score < 0 ||
      score > 100
    ) {
      // Display warning alert
      alertContainer.innerHTML = alertFunction(
        "Warning!",
        "Please enter a valid score between 0 and 100!",
        "danger"
      );
      clearAlert();
      return;
    }

    addItem(
      `${userName.value.charAt(0).toUpperCase()}${userName.value
        .slice(1)
        .toLowerCase()}`,
      score
    );

    // Display success alert
    alertContainer.innerHTML = alertFunction(
      "Success!",
      "Information received successfully...",
      "success"
    );
    clearAlert();

    // Show the list container
    listContainer.classList.remove("d-none");

    // Clear the form inputs after submission
    [userName, userScore].forEach((input) => (input.value = ""));
  }

  // CLEAR LIST
  // ----------
  clearButton.addEventListener("click", () => {
    // Display info alert
    alertContainer.innerHTML = alertFunction(
      "Info!",
      "The list has been cleared...",
      "info"
    );

    clearAlert();

    userList.innerHTML = "";

    // Hide the list container
    listContainer.classList.add("d-none");
  });
});

/*
NOTE:
For Bootstrap classes used in script.js, refer to 
https://getbootstrap.com/docs/5.3/getting-started/introduction/
*/
