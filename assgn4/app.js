// Import required modules
const express = require("express");
const fs = require("fs");

const ejs = require('ejs');
const apiRouter = require('./routes/apiRouter');
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
const userData = JSON.parse(fs.readFileSync("data/fakeUsers.json"));

// Define a route for the homepage
app.get("/", (req, res) => {
  // Check if user login details are stored in cookies
  if (req.cookies.username && req.cookies.password) {
    // If user details are stored, redirect to list
    res.redirect("/LoggedInList");
  } else {
    // Serve the HTML file for the login page
    res.sendFile(__dirname + "/public/index.html");
  }
});

// Define a route for handling the login form submission (POST request)
app.post("/", (req, res) => {
  // Extract username and password from the form data
  const { username, password, remember } = req.body;

  // Simulate user authentication using data from fakeUsers.json
  const authenticatedUser = userData.find(
    (user) => user.email === username && user.password === password
  );

  // Check if the user is an admin by searching in admin.json
  const adminData = JSON.parse(fs.readFileSync("data/admin.json"));
  const isAdmin = adminData.find(
    (admin) => admin.email === username && admin.password === password
  );

  if (isAdmin) {
    // If user is found in admin.json, redirect to admin.html
    res.redirect("/admin.html");
  } else if (authenticatedUser) {
    // If user is found in fakeUsers.json, redirect to LoggedInList
    res.redirect("/LoggedInList");
  } else {
    // If user is not found in either file, handle authentication failure
    res.status(401).send("Authentication failed");
  }
});

// Define a route for displaying a paginated list of users
app.get("/LoggedInList", (req, res) => {
  // Get the requested page number from query parameter (default to page 1)
  console.log("Received request for LoggedInList");
  const page = parseInt(req.query.page) || 1;

  // Number of items displayed per page
  const perPage = 25;

  // Calculate the start and end indices for pagination
  const startIndex = (page - 1) * perPage;
  const endIndex = page * perPage;

  // Get the subset of users for the current page from the loaded JSON data
  const usersPerPage = userData.slice(startIndex, endIndex);

  // Render the paginated list view using EJS template
  res.render("LoggedInList", { users: usersPerPage, currentPage: page });
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

app.get("/admin.html", (req, res) => {
  // Render the admin page using EJS template or serve the HTML file directly
  res.render("admin");
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
