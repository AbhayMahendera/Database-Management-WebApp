// Import required modules
const express = require("express");
const fs = require("fs");
const ejs = require('ejs');
// Create an Express application
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static("public"));

// Enable parsing of URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Load user data from fakeUsers.json
const userData = JSON.parse(fs.readFileSync("fakeUsers.json"));

// Define a route for the homepage
app.get("/", (req, res) => {
  // Serve the HTML file for the login page
  res.sendFile(__dirname + "/public/index.html");
});

// Define a route for handling the login form submission (POST request)
app.post("/", (req, res) => {
  // Extract username and password from the form data
  const { username, password } = req.body;

  // Simulate user authentication using data from fakeUsers.json
  const authenticatedUser = userData.find(
    (user) => user.email === username && user.password === password
  );

  if (authenticatedUser) {
    // Redirect to the list page after successful login
    res.redirect("/list");
  } else {
    // Show a prompt for invalid credentials using JavaScript alert
    res.send(
      "<script>alert('Invalid username or password. Please try again.'); window.location='/';</script>"
    );
  }
});

// Define a route for displaying a paginated list of users
app.get("/list", (req, res) => {
  // Get the requested page number from query parameter (default to page 1)
  const page = parseInt(req.query.page) || 1;

  // Number of items displayed per page
  const perPage = 25;

  // Calculate the start and end indices for pagination
  const startIndex = (page - 1) * perPage;
  const endIndex = page * perPage;

  // Get the subset of users for the current page from the loaded JSON data
  const usersPerPage = userData.slice(startIndex, endIndex);

  // Render the paginated list view using EJS template
  res.render("list", { users: usersPerPage, currentPage: page });
});

// Define a route for displaying user details
app.get("/user/:userId", (req, res) => {
  // Extract the user ID from the route parameters
  const userId = parseInt(req.params.userId);

  // Find the user with the specified ID in the loaded JSON data
  const user = userData.find((u) => u.id === userId);

  if (!user) {
    // Handle the case where the user is not found with a 404 status
    res.status(404).send("User not found");
    return;
  }

  // Render the user detail page using EJS template
  res.render("userDetail", { user });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
