# 🗂️ Grade Evaluation with Conditional Statements

## 📝 Description

Conditional statements _(`if`, `else if`, `else`)_ are used to evaluate and display student grades. The user inputs their name and score, and a grade is assigned based on the score.

---

## 🔧 How It Works

Evaluates a student's grade based on input provided via `prompt()` and displays the result in a styled format. Here's how it works:

### 1. **Grade Calculation**

- Calculates the grade based on the input score:
  - **AA**: 90-100 _(Excellent)_
  - **BA**: 85-89 _(Very Good)_
  - **BB**: 80-84 _(Good)_
  - **CB**: 75-79 _(Fairly Good)_
  - **CC**: 70-74 _(Satisfactory)_
  - **DC**: 65-69 _(Close to Passing)_
  - **DD**: 60-64 _(Passing)_
  - **FD**: 50-59 _(Barely Passing)_
  - **FF**: 0-49 _(Fail)_

### 2. **Input Validation**

- Checks that the entered score is within the valid range _(0-100)_. If the user enters an invalid score _(e.g., a non-numeric value)_, an error message will be shown.
- The student's name input is validated. If no name is entered or the user cancels, the default name **"Student"** will be used.

### 3. **Emoji and Color Display**

- A **smiley face (😀)** is shown for passing grades, and a **sad face (☹️)** is displayed for failing grades.
- The grade display color changes based on the result: **red** for failure and **green** for passing grades.

---

## 📥 How to Run Locally

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/oktay-acar/javascript-projects.git
   ```

2. Navigate to the project folder within the repository.

   ```bash
   cd javascript-projects/grade-evaluation-conditional
   ```

3. Open the `index.html` file in your browser by double-clicking it
   or use a live server extension _(e.g., with VS Code)_.

---

## 🛠️ Technologies Used

- HTML5
- CSS3 _(Custom Styles via JavaScript)_
- Vanilla JavaScript _(ES6+)_
- Bootstrap [5.3.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- Font Awesome [6.7.2](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css)

---

## 🎬 Preview

https://github.com/user-attachments/assets/2e7cdad2-dd13-46ad-ad47-8d58dbae41ab

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

Created with ❤️ by **[Oktay Acar](https://github.com/oktay-acar)**, 2025.
