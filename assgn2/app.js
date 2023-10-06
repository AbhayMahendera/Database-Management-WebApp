const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "public\index.html");
});

app.get("/list", (req, res) => {
  // Placeholder for the paginated list view page
  res.send("Paginated List View Page");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
