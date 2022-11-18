import logo from "./logo.svg";
import "./App.css";
import TweetContainer from "./TweetContainer";

function App() {
  return (
    <>
      <TweetContainer status="At home, binge watching Breaking Bad for second time!" />
      <TweetContainer status="Sometimes, at night, after my son has gone to bed, I go into my room, and finish all of my sentences." />
      <TweetContainer status="What do you think kid rock and chris rock talk about at family reunions? " />
    </>
  );
}

export default App;
