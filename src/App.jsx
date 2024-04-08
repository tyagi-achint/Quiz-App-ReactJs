import React, { useState } from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Quiz from "./Components/Quiz";

export default function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <>
      <Header />
      {!quizStarted ? (
        <HomePage onStartQuiz={handleStartQuiz} />
      ) : (
        <main>
          <Quiz />
        </main>
      )}
    </>
  );
}
