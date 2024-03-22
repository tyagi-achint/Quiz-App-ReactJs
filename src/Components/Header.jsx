import imgLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={imgLogo} alt="Logo" />
      <h1>Smarty Pants Quiz</h1>
    </header>
  );
}
