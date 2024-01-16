import { useState } from "react";

export default function BetterSignupForm() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      currData[changedField] = newValue;
      return { ...currData };
    });
  };
  const handleSubmit = () => {
    console.log(formData.firstName, formData.lastName);
  };
  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        id="firstName"
        name="firstName"
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        id="lastName"
        name="lastName"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
