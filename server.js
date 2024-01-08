                                    // -------------- Import required modules --------------  //

const express = require("express");
const fs = require("fs");
const ejs = require('ejs');
const apiRouter = require('./routes/apiRouter');
const bodyParser = require("body-parser");
const {sequelize,users} = require('./sequelize');
const session = require("express-session");

                                                  // Create an Express application
const app = express();
const port = 3000;
app.use("/api",apiRouter)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.static("public"));

const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(session({
  secret: 'ec2b8cf63a1e5e6a91e8c05f5d98b8fd764cb6c2c38c007fa687c5a1771a9ec1',
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize, 
  }),
  cookie: { secure: true },
}));


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

app.get("/valid", (req, res) => { 
   res.render("valid"); 
  });

app.post('/login', async (req, res) => {
  const { loginVerify } = require('./sequelize');

  const { email, password } = req.body;

  // Use await to wait for the result of loginVerify
  const isAuthenticated = await loginVerify(email, password , 'user');
  const isAdminAuthenticated = await loginVerify(email, password, 'admins');

  if (isAuthenticated) {
    req.session.user = { email, role: 'user' };
    // Redirect to the user list page if user credentials are valid
    res.redirect('/valid');
  } else if (isAdminAuthenticated) {
    req.session.user = { email, role: 'admin' };
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
    const allUsers = await users.findAll({ order: [['id', 'ASC']] });
    const page = parseInt(req.query.page) || 1;
    const perPage = 25;

    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;

    const usersPerPage = allUsers.slice(startIndex, endIndex);

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

                                          // ------------------------ Admin -> create --------------------- //
const { createUser } = require('./sequelize');  
app.post('/admin/createUser', async (req, res) => {
  try {
    const { id , firstname, lastname, email, password, dob, phone , company} = req.body;
   
if (!firstname || !lastname) {
  res.locals.message = 'Firstname and lastname are required';
  res.locals.success = false;
  res.redirect('/admin'); // Redirect to the admin page with an error message
  return;
}
    // Call the createUser function from sequelize.js
    await createUser(id , firstname, lastname, email, password, dob, phone, company);

    res.redirect('/admin'); // Redirect to the admin page or wherever you want after creation
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Error creating user');
  }
});


// ------------------------ Admin -> update --------------------- //

const { updateUser, deleteUser } = require('./sequelize');

app.post('/admin/updateUser', async (req, res) => {
  try {
    const { id, firstname, lastname, email, password, dob, phone, company } = req.body;

    // Call the updateUser function from sequelize.js
    await updateUser(id, firstname, lastname, email, password, dob, phone, company);

    res.redirect('/admin'); // Redirect to the admin page or wherever you want after updating
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send('Error updating user');
  }
});

// ------------------------ Admin -> delete --------------------- //

app.post('/admin/deleteUser', async (req, res) => {
  try {
    const { id } = req.body;

    // Call the deleteUser function from sequelize.js
    await deleteUser(id);

    res.redirect('/admin'); // Redirect to the admin page or wherever you want after deleting
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send('Error deleting user');
  }
});


// ----------------- userDetails -> Edit --------------------- //

app.post('/updateUser', async (req, res) => {
  try {
      const { id, firstname, lastname, email, dob, company, phone } = req.body;

      // Call the updateUser function from sequelize.js
      await updateUser(id, firstname, lastname, email, null, dob, phone, company);

      res.redirect(`/user/${id}`); // Redirect to the user details page after updating
  } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).send('Error updating user');
  }
});



                                          // ------------------------ server --------------------- //


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
