import React, { useState } from "react";

export default function HomePage({ onStartQuiz }) {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    onStartQuiz();
  };

  return (
    <div id="HomePage">
      {quizStarted ? null : (
        <>
          <h2>Ready!</h2>
          <button onClick={handleStartQuiz}>Start Quiz</button>
        </>
      )}
    </div>
  );
}
