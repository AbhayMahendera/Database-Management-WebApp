                                    // -------------- Import required modules --------------  //

const express = require("express");
const fs = require("fs");
const ejs = require('ejs');
const apiRouter = require('./routes/apiRouter');
const bodyParser = require("body-parser");
const {sequelize,users} = require('./sequelize');


                                                  // Create an Express application
const app = express();
const port = 3000;
app.use("/api",apiRouter)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.static("public"));


                                         // ------------------------ admin --------------------- //


app.get("/admin", (req, res) => {
  // Render the admin page using EJS template or serve the HTML file directly
  res.render("admin");
});




const {readId} = require('./sequelize');
// Define a route for handling the searchUser form submission
app.post('/searchUser', (req, res) => {
  // Extract the user ID from the form data
  const { id } = req.body;

  // Call the readId function with the extracted user ID
  readId(id);

  res.redirect(`/user/${id}`);
});


                                         // ------------------------ login --------------------- //

app.post('/login', async (req, res) => {
  const { loginVerify } = require('./sequelize');

  const { email, password } = req.body;

  // Use await to wait for the result of loginVerify
  const isAuthenticated = await loginVerify(email, password , 'user');
  const isAdminAuthenticated = await loginVerify(email, password, 'admins');

  if (isAuthenticated) {
    // Redirect to the user list page if user credentials are valid
    res.redirect('/LoggedInList');
  } else if (isAdminAuthenticated) {
    // Redirect to the admin page if admin credentials are valid
    res.redirect('/admin');
  } else {
    // Handle authentication failure, for example, redirect to login page with an error message
    res.redirect('/?error=Authentication failed');
  }
});

                                         // ------------------------ user list --------------------- //

app.get("/LoggedInList", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = 25;

    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;

    const usersPerPage = await users.findAll({
      offset: startIndex,
      limit: perPage,
      order: [['id', 'ASC']],
    });

    res.render("LoggedInList", { users: usersPerPage, currentPage: page });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal Server Error');
  }
});

                                         // ------------------------ user details --------------------- //

app.get("/user/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const user = await users.findByPk(id);

    if (!user) {
      res.status(404).send("User not found");
      return;
    }

    res.render("userDetail", { user });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal Server Error');
  }
});


                                          // ------------------------ server --------------------- //


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
