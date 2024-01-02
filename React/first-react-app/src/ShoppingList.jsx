import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <ShoppingListItem
          key={i.id}
          item={i.item}
          quantity={i.quantity}
          purchased={i.purchased}
        />
        // <ShoppingListItem key={i.id} {...i} />
      ))}
    </ul>
  );
}
