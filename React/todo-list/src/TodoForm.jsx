import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Create from "@mui/icons-material/Create";
export default function TodoForm({ createTodo }) {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(text);
    setText("");
  };
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" type="submit">
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </form>
    </ListItem>
  );
}
