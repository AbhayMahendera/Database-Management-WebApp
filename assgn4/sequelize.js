
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



const admins = sequelize.define('admins', {
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
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
}, {
  timestamps: false,
});


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
      .then((user) => {         // i did logged them to console to check for errors
          if (user) {
              //console.log('User details for ID', id);
              //console.log('First Name:', user.firstname);
              //console.log('Last Name:', user.lastname);
              //console.log('email:', user.email);
              //console.log('Password:', user.password);
              //console.log('Date of Birth:', user.dob);
              //console.log('Phone:', user.phone);
              console.log (' -------------> READ DATA - SUCCESS !')
          } else {
              console.log(' -------------> NO USER FOUND WITH ID ', id);
          }
      })
      .catch((error) => {
          console.error(' -------------> READ DATA - FAILURE ! : ', error);
      });

} 

// --------------> LOGIN
async function loginVerify(email, password, userType) {
  try {
    console.log('----------------------------');
    console.log('login request for : ');
    console.log('email:', email);
    console.log('Password:', password);

    let user;
    if (userType === 'admins') {
      user = await admins.findOne({
        where: {
          email: email,
          password: password,
        },
      });
    } else if (userType === 'user') {
      user = await users.findOne({
        where: {
          email: email,
          password: password,
        },
      });
    }

    if (user) {
      // If user is found, return true to indicate successful login
      return true;
    } else {
      // If user is not found, return false to indicate unsuccessful login
      return false;
    }
  } catch (error) {
    // Handle any errors that occur during the verification process
    console.error('Error during login verification:', error);
    return false;
  }
}

//    ----------------------------- UPDATE -----------------------------    //


















//    ----------------------------- DELETE -----------------------------    //


module.exports = {
  sequelize,
  users,
  readId,
  loginVerify,
  admins,
};