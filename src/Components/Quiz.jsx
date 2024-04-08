import { useCallback, useState } from "react";
import QUESTIONS from "../questoins.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;

  const quizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    userAnswer
  ) {
    setUserAnswer((prevAnswers) => {
      return [...prevAnswers, userAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizComplete) {
    return <Summary userAnswers={userAnswer} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
