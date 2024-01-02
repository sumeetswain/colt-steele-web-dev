export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  const isTrue = num1 === num2;
  //   const result = num1 === num2 ? "You Win!" : "You Lose :((";
  const styles = { color: num1 === num2 ? "green" : "red" };
  return (
    <div style={styles}>
      {/* <h1>{result}</h1> */}
      <h1>{num1 === num2 ? "You Win!" : "You Lose :(("}</h1>
      {isTrue ? <h3>you win</h3> : null}
      <h1>Num1: {num1}</h1>
      <h1>Num2: {num2}</h1>
    </div>
  );
}
