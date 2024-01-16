import { useState } from "react";

export default function ValidatedShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const [productIsValid, setProductIsValid] = useState(false);
  const handleChange = (e) => {
    if (e.target.name === "product") {
      // here we are targetting the product input box by e.target.name
      validate(e.target.value);
      // and passing the value in that box to the validate function
    }
    setFormData((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const validate = (product) => {
    if (product.length === 0) {
      setProductIsValid(false);
    } else {
      setProductIsValid(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (productIsValid) {
      addItem(formData);
      setFormData({ product: "", quantity: 0 });
    }
    setProductIsValid(false);
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
      {!productIsValid && (
        <p style={{ color: "red" }}>Product cannot be empty</p>
      )}
      <button onClick={handleSubmit}>Add Item</button>
    </form>
  );
}
