import TextField from "@mui/material/TextField";
export default function FormDemo() {
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField
        id="filled-basic"
        label="Name"
        variant="filled"
        color="secondary"
      />
    </div>
  );
}
