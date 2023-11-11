
// Import required modules
const express = require("express");
const fs = require("fs");
const cookieParser = require('cookie-parser');
const ejs = require('ejs');

// Create an Express application
const app = express();
const port = 8000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static("public"));

// Enable parsing of URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Load user data from fakeUsers.json
const userData = JSON.parse(fs.readFileSync("fakeUsers.json"));

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

  if (authenticatedUser) {
    // Remember login information if "remember" checkbox is checked
    if (remember) {
      res.cookie('username', username, { maxAge: 900000 }); // 15 minutes (maxAge is in milliseconds)
      res.cookie('password', password, { maxAge: 900000 });
    }

    // Redirect to the list page after successful login
    res.redirect("/LoggedInList");
  } else {
    // Show a prompt for invalid credentials using JavaScript alert
    res.send(
      "<script>alert('Invalid username or password. Please try again.'); window.location='/';</script>"
    );
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
app.get("/viewList", (req, res) => {
  // Get the requested page number from query parameter (default to page 1)
  console.log("Received request for viewList");
  const page = parseInt(req.query.page) || 1;

  // Number of items displayed per page
  const perPage = 25;

  // Calculate the start and end indices for pagination
  const startIndex = (page - 1) * perPage;
  const endIndex = page * perPage;

  // Get the subset of users for the current page from the loaded JSON data
  const usersPerPage = userData.slice(startIndex, endIndex);

  // Render the paginated list view using EJS template
  res.render("viewList", { users: usersPerPage, currentPage: page });
});


// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
