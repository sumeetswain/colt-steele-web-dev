import Player from "./Player";
export default function ScoreBoard({ winScore = 5, playerNo = 2 }) {
  const players = [];
  for (let i = 0; i < playerNo; i++) {
    players.push(
      <>
        Player {i}:
        <Player winScore={winScore} playerNo={playerNo} />
        <br />
      </>
    );
  }
  const resetScore = () => {};
  return (
    <div>
      <p>To win : {winScore}</p>
      {players}
      <button onClick={resetScore}>Reset</button>
    </div>
  );
}
