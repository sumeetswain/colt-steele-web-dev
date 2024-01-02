export default function Heading({ color = "purple", text = "Hey there!" }) {
  return <h1 style={{ color: color }}>{text}</h1>;
}
