import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  const changeUsername = (evt) => {
    setUsername(evt.target.value);
    // when the value in the input/textbox is changed and the onChange event is triggered
    //this event is passed into the changeusername function and we use it for the event.target which is the textbox
    // then the value within the textbox to set the state of the username
  };
  return (
    <div>
      <label htmlFor="username">Enter a username</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={changeUsername}
      />
      <button>Submit</button>
    </div>
  );
}
