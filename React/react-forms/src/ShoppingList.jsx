import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListForm from "./ShoppingListForm";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
export default function ShoppingList() {
  const [items, setItems] = useState([
    {
      id: uuid(),
      product: "bananas",
      quantity: 12,
    },
    {
      id: uuid(),
      product: "apples",
      quantity: 7,
    },
  ]);
  const addItem = (item) => {
    setItems((currItems) => {
      return [...currItems, { ...item, id: uuid() }];
    });
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product}-{i.quantity}
          </li>
        ))}
      </ul>
      <ValidatedShoppingListForm addItem={addItem} />
    </div>
  );
}
