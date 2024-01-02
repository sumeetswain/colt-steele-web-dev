export default function ShoppingListItem({ key, item, quantity, purchased }) {
  return (
    <li
      key={key}
      style={{
        color: purchased ? "grey" : "red",
        textDecoration: purchased ? "line-through" : "none",
      }}
    >
      {item} - {quantity}
    </li>
  );
}
