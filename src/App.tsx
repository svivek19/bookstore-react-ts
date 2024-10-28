import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const App: React.FC = () => {
  const [bookName, setBookName] = React.useState<any[]>([]);

  const handleSubmit = () => {
    console.log(bookName);
  };

  return (
    <div>
      <h1>Book Store</h1>

      <Box component="form" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Book name"
          onChange={(e) => setBookName([e.target.value])}
          variant="outlined"
          sx={{ width: "30ch", height: "55px" }}
        />
        <Button
          variant="contained"
          color="success"
          onClick={handleSubmit}
          sx={{ width: "20ch", height: "55px", marginLeft: "10px" }}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default App;
