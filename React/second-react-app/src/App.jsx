import "./App.css";
import Counter from "./Counter";
import ScoreKeeper from "./ScoreKeeper";
import EmojiManager from "./EmojiManager";
import NewScoreBoard from "./NewScoreBoard";
function App() {
  return (
    <>
      <NewScoreBoard playerNo={10} winScore={3} />
    </>
  );
}

export default App;
