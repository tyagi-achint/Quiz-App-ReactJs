import React, { useState } from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Quiz from "./Components/Quiz";

export default function App() {
  const [quizType, setQuizType] = useState(null);

  const handleStartQuiz = (quizType) => {
    setQuizType(quizType);
  };

  return (
    <>
      <Header />
      {!quizType ? (
        <HomePage onStartQuiz={handleStartQuiz} />
      ) : (
        <main>
          <Quiz quizType={quizType} />
        </main>
      )}
    </>
  );
}
