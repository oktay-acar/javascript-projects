# Grade Evaluation with Conditional Statements

## Description

Conditional statements _(`if`, `else if`, `else`)_ are used to evaluate and display student grades. The user inputs their name and score, and a grade is assigned based on the score.

---

## How It Works

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

## Technologies Used

- HTML5
- Vanilla JavaScript
- Bootstrap [5.3.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

---
 
## Preview

https://github.com/user-attachments/assets/2e7cdad2-dd13-46ad-ad47-8d58dbae41ab
