export default function Clicker({ msg = "Hello", btnText = "Click Here" }) {
  function handleClick() {
    console.log(msg);
    // variables dont need to be passed into a function to use them
  }
  return (
    <div>
      <button onClick={handleClick}>{btnText}</button>
    </div>
  );
}
