import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const App: React.FC = () => {
  const [bookName, setBookName] = React.useState<string>("");
  const [books, setBooks] = React.useState<string[]>([]);
  const [editIndex, setEditIndex] = React.useState<number | null>(null);

  const handleSubmit = () => {
    if (bookName.trim()) {
      if (editIndex !== null) {
        // Editing an existing book
        const updatedBooks = [...books];
        updatedBooks[editIndex] = bookName;
        setBooks(updatedBooks);
        setEditIndex(null); // Reset edit index
      } else {
        // Adding a new book
        setBooks([...books, bookName]);
      }
      setBookName(""); // Clear input after adding or editing
    }
  };

  const handleDelete = (index: number) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  const handleEdit = (index: number) => {
    setBookName(books[index]); // Set input to selected book name
    setEditIndex(index); // Set index to identify the book being edited
  };

  return (
    <div>
      <h1>Book Store</h1>

      <Box component="form" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Book name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          variant="outlined"
          sx={{ width: "30ch", height: "55px" }}
        />
        <Button
          variant="contained"
          color="success"
          onClick={handleSubmit}
          sx={{ width: "20ch", height: "55px", marginLeft: "10px" }}
        >
          {editIndex !== null ? "Update" : "Submit"}
        </Button>
      </Box>

      <div style={{ marginTop: "20px" }}>
        {books.map((book, index) => (
          <div
            key={index}
            style={{ margin: "10px 0", display: "flex", alignItems: "center" }}
          >
            <span style={{ flex: 1 }}>{book}</span>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleEdit(index)}
              sx={{ marginRight: "10px" }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(index)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
