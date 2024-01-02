export default function Form() {
  function handleClick(e) {
    e.preventDefault();
    console.log("Clicked");
  }
  return (
    <form>
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}
