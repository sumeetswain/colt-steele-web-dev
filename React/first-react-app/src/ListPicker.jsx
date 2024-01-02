export default function ListPicker({ values }) {
  const randomIndex = Math.floor(Math.random() * values.length);
  const randomElement = values[randomIndex];

  return (
    <div>
      <p>The list of values: {randomElement}</p>
    </div>
  );
}
