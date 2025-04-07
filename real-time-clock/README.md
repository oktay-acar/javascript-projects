# Real-Time Clock with User Greeting

## Description

This is a real-time digital clock that greets the user by name, shows the current date and time, and displays an emoji for the day of the week. The clock updates every second for accurate time tracking.

---

## Scripts Used

- **script.js**: Implements the clock functionality with formatted date and time, as well as dynamic emoji updates based on the day of the week. It uses the `Intl.DateTimeFormat` API for date and time formatting.

- **alternative-script.js**: Provides an alternative implementation of the clock, manually formatting the date and time **without** using the `Intl.DateTimeFormat` API. Instead, it utilizes basic JavaScript methods like `padStart()` to ensure proper formatting of the date and time.

---

## Custom JavaScript Usage

By default, **script.js** is used in `index.html`. If you would like to use **alternative-script.js**, follow these steps:

1. Comment out **script.js** in `index.html`.
2. Uncomment **alternative-script.js** in `index.html`.

---

## Features

- Real-time clock display.
- Dynamic greeting based on the user's time zone.

---

## Technologies Used

- HTML5
- Vanilla JavaScript
- Bootstrap [5.3.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
