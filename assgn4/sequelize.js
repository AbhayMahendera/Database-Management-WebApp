
//    ----------------------------- CONNECTION -----------------------------    //

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('SenecaDB', 'AbhayMahendera', 'c2pkTPhE7iNQ', {
  host: 'ep-ancient-truth-58879858-pooler.us-east-2.aws.neon.tech',
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    ssl: { rejectUnauthorized: false },
  },
});
//    ----------------------------- AUTHENTICATION -----------------------------    //
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection established!');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

//    ----------------------------- ATTRIBUTES FOR USERS TABLE -----------------------------    //

const users = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dob: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },},
  {
    timestamps: false,
  });

//    ----------------------------- SYNC -----------------------------    //
sequelize.sync()
  .then(() => {
    console.log('Database sync done!');
  })
  .catch((error) => {
    console.error('Error syncing sequelize:', error);
  });



  //    ----------------------------- CREATE  -----------------------------    //

























//    ----------------------------- READ -----------------------------    //

function readId(id) {
  users.findByPk(id)
      .then((user) => {
          if (user) {
              console.log('User details for ID', id);
              console.log('First Name:', user.firstname);
              console.log('Last Name:', user.lastname);
              console.log('Email:', user.email);
              console.log('Password:', user.password);
              console.log('Date of Birth:', user.dob);
              console.log('Phone:', user.phone);
          } else {
              console.log('User not found with ID', id);
          }
      })
      .catch((error) => {
          console.error('Error fetching user details:', error);
      });

} 
  // Call the readId function
  readId();


  // ----> ADMIN | SEARCH

  


//    ----------------------------- UPDATE -----------------------------    //


















//    ----------------------------- DELETE -----------------------------    //


module.exports = {
  sequelize,
  users,
  readId,
};