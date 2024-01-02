export default function ColorList({ colors }) {
  return (
    <div>
      {/* <ul>for(let color in colors){<li color={color}>{color}</li>}</ul> */}
      <p>Color List</p>
      <ul>
        {colors.map((c) => (
          <li style={{ color: c }}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
