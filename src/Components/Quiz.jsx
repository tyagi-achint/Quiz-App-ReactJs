import { useState } from "react";
import QUESTIONS from "../questoins.js";
import quizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;

  const quizComplete = activeQuestionIndex === QUESTIONS.length;
  function handleAnswerClick(userAnswer) {
    setUserAnswer((prevAnswers) => {
      return [...prevAnswers, userAnswer];
    });
  }

  if (quizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz Completed" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const suffledAnswers = QUESTIONS[activeQuestionIndex].answers;
  suffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="queston">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {suffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleAnswerClick(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
