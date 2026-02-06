# 🗂️ Simple Accordion

## 📝 Description

This is a **Simple Accordion** that demonstrates dynamic toggling of accordion items with smooth transitions, icon rotation, resetting icons and contents when clicking outside, a footer that automatically adjusts its padding, and a Scroll-to-Top button with smooth scrolling. 

---

## ⚙️ Features

1.  **Accordion**
    - Click an accordion header to expand or collapse its content
    - Only one accordion opens at a time
    - Icons rotate based on open/close state
    - Outside click closes all open accordion items and resets their icons

2.  **Footer Padding Adjustment**
    - The footer height is automatically detected and bottom padding is applied to prevent content overlap

3.  **Scroll-to-top Button**
    - Smoothly scrolls the page to the top when clicked
    - Implemented using JavaScript
    - 💡 **Notes**
      - Due to the limited page content, `body { min-height: 150vh; }` is set so that the `scrollIntoView()` function can be properly observed.
      - `<a>` links work correctly even when CSS `scroll-behavior: smooth;` is applied, without JavaScript.

        Actual smooth scrolling effect applies when linking to `#` or an ID/anchor on the page, for example:

        **HTML**

        ```html
        <!-- 1. Scroll to top -->
        <a href="#">Top</a>

        <!-- 2. Scroll to a specific section -->
        <section id="section1">
          <h2>Section 1</h2>
          <p>Content here...</p>
        </section>

        <a href="#section1">Go to Section 1</a>
        ```

        **CSS**

        ```css
        * {
          scroll-behavior: smooth;
        }
        ```

---

## 📥 How to Run Locally

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/oktay-acar/javascript-projects.git
   ```

2. Navigate to the project folder within the repository.

   ```bash
   cd javascript-projects/simple-accordion
   ```

3. Open the `index.html` file in your browser by double-clicking it
   or use a live server extension _(e.g., with VS Code)_.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript _(ES6+)_
- Font Awesome [7.0.1](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repository, open issues, or submit pull requests.

---

## 📄 License

This project is part of the [javascript-projects](https://github.com/oktay-acar/javascript-projects) repository.  
Licensed under the [MIT License](https://github.com/oktay-acar/javascript-projects/blob/main/LICENSE).

---

## 👨🏻‍💻 Author

Created with ❤️ by **[Oktay Acar](https://github.com/oktay-acar)**, 2026.
