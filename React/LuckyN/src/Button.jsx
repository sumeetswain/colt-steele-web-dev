import "./Button.css";
export default function Button({ clickFunc }) {
  return (
    <button onClick={clickFunc} className="Button">
      Click
    </button>
  );
}
