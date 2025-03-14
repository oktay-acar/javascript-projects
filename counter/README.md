# Counter

## Description

This is a simple counter where users can increase, decrease, reset the counter value, and reload the page.

It is available in two versions:

- **Counter with `localStorage`**: This version saves the counter state using `localStorage`, so the counter value persists even after a page reload or browser restart.
- **Counter without `localStorage`**: This version does not persist the counter state; the value resets when the page is reloaded.

---

## Features

- **Increase**: The counter value can be increased by 1 each time the **"Increase"** button is clicked.
- **Decrease**: The counter value can be decreased by 1 each time the **"Decrease"** button is clicked.
- **Reset**: The counter can be reset to 0 by clicking the **"Reset"** button.
- **Reload**: Clicking the **"Reload"** button reloads the page. In the `localStorage` version, the counter value persists across reloads, but in the non-`localStorage` version, the counter resets when the page is reloaded.
- **Persistence** _(for the `localStorage` version)_: The counter value is saved in the browser's `localStorage`, allowing the value to persist across page reloads or browser restarts.

---

## Technologies Used

- HTML5
- Vanilla JavaScript
- Bootstrap [5.3.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- `localStorage` for persisting the counter value _(used only in the `localStorage` version)_

---

## Notes

- The counter does not require any backend server. All the operations _(increase, decrease, reset)_ are handled on the frontend using **Vanilla JavaScript**.
