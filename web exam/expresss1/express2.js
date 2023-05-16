const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route handler for '/'
app.get("/", (req, res) => {
  // Send HTML form as the response
  res.send(`
    <form action="/submit" method="post">
      <input type="text" name="data" placeholder="Enter data">
      <button type="submit">Submit</button>
    </form>
  `);
});

// Route handler for form submission
app.post("/submit", (req, res) => {
  const data = req.body.data;
  // Send the submitted data as the response
  res.send(`Submitted data: ${data}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
