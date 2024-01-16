import { useState } from "react";

export default function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const handleChange = (e) => {
    setFormData((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormData({ product: "", quantity: 0 });
  };
  return (
    <form>
      <label htmlFor="product">Product Name</label>
      <input
        type="text"
        placeholder="Product Name"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />

      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        placeholder="1"
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />
      <button onClick={handleSubmit}>Add Item</button>
    </form>
  );
}
