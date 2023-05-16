const express = require("express");
const app = express();
const port = 3000;

// Route handler for '/'
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// Route handler for '/books'
app.get("/books", (req, res) => {
  res.send("Here is the information about books.");
});

// Start the server
app.listen(port, () => {
  console.log("Server is running on http://localhost:${port}");
});
