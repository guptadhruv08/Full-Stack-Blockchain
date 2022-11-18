import logo from "./logo.svg";
import "./App.css";
import Student from "./Student";
import College from "./College";

function App() {
  return (
    <>
      <Student name="Rick Rude" number="11111" enrolled="2" />
      <Student name="Shawn Michaels" number="22222" enrolled="1" />
      <Student name="Bret Hart" number="33333" enrolled="3" />
      <College name="George Brown" location="Casa Loma" />
    </>
  );
}

export default App;
