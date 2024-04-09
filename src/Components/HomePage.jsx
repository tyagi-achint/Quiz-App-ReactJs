export default function HomePage({ onStartQuiz }) {
  return (
    <div id="HomePage">
      <h2>Ready!</h2>
      <button onClick={() => onStartQuiz("react")}>React Quiz</button>
      <button onClick={() => onStartQuiz("python")}>Python Quiz</button>
      <button onClick={() => onStartQuiz("javascript")}>JavaScript Quiz</button>
      <button onClick={() => onStartQuiz("java")}>Java Quiz</button>
    </div>
  );
}
