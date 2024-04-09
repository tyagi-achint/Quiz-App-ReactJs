import { useCallback, useState } from "react";
import {
  javaQuestions,
  pythonQuestions,
  reactQuestions,
  javascriptQuestions,
} from "../questoins.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz({ quizType }) {
  let QUESTIONS;
  if (quizType === "react") {
    QUESTIONS = reactQuestions;
  } else if (quizType === "python") {
    QUESTIONS = pythonQuestions;
  } else if (quizType === "javascript") {
    QUESTIONS = javascriptQuestions;
  } else {
    QUESTIONS = javaQuestions;
  }

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
    return <Summary userAnswers={userAnswer} QUESTIONS={QUESTIONS} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
        QUESTIONS={QUESTIONS}
      />
    </div>
  );
}
