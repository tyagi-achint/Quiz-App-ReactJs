# React Quiz Application

This is a simple quiz application built using React. It allows users to take a quiz, view their results, and restart the quiz.

## Features

- Displays a series of questions with multiple-choice answers.
- Users can select answers, skip questions, and view their quiz summary.
- Provides a summary of quiz results including correct, wrong, and skipped answers.
- Allows users to restart the quiz.
- Offer multiple quiz options for users to choose from.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/tyagi-achint/Quiz-App-ReactJs.git
   ```

2. Navigate into the project directory:

   ```bash
   cd react-quiz-application
   ```

3. Install dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

After installing the dependencies, you can start the development server:

```bash
npm start
# or
yarn start
```

The application should open automatically in your default web browser at `http://localhost:3000`.

## Folder Structure

The project structure looks like this:

```
react-quiz-application/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Components/
│   │   ├── Answers.jsx
│   │   ├── Header.jsx
│   │   ├── HomePage.jsx
│   │   ├── Question.jsx
│   │   ├── QuestionTimer.jsx
│   │   ├── Quiz.jsx
│   │   └── Summary.jsx
│   ├── assets/
│   │   └── quiz-complete.png
│   │   └── quiz-logo.png
│   ├── questions.js
│   ├── App.js
│   └── index.js
│   └── styles.css
├── README.md
├── package.json
└── ...
```
