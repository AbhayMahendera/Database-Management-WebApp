// Import required modules
const express = require("express");
const fs = require("fs");
const ejs = require('ejs');
const cookieParser = require('cookie-parser'); //  cookie handling

// Create an Express application
const app = express();
const port = 8000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static("public"));

// Enable parsing of URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Use the cookie parser middleware
app.use(cookieParser());

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
  const { username, password, remember } = req.body;

  // Simulate user authentication using data from fakeUsers.json
  const authenticatedUser = userData.find(
    (user) => user.email === username && user.password === password
  );

  if (authenticatedUser) {
    // If "Remember Me" is checked, set a cookie to remember the user's session for a longer time
    if (remember) {
      // Set a cookie to remember the user (for example, valid for 7 days)
      res.cookie('rememberedUser', username, { maxAge: 7 * 24 * 60 * 60 * 1000 });
    }

    // Redirect to the list page after successful login
    res.redirect("/list");
  } else {
    // Show a prompt for invalid credentials using JavaScript alert
    res.send(
      "<script>alert('Invalid username or password. Please try again.'); window.location='/';</script>"
    );
  }
});

// ... (existing routes for list and user details) ...

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
