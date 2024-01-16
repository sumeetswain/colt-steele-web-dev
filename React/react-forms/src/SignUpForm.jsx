import { useState } from "react";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const changeFirstName = (evt) => {
    setFirstName(evt.target.value);
    // when the value in the input/textbox is changed and the onChange event is triggered
    //this event is passed into the changeusername function and we use it for the event.target which is the textbox
    // then the value within the textbox to set the state of the username
  };
  const changeLastName = (evt) => {
    setLastName(evt.target.value);
  };
  const handleSubmit = () => {
    console.log(firstName, lastName);
  };
  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={changeFirstName}
        id="firstName"
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={changeLastName}
        id="lastName"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
