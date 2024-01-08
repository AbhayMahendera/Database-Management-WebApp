
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
 
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
  {
    timestamps: false,
  });


  // ---------- Products ------------- //

  const products = sequelize.define('products', {
    productid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  }, {
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


  


  async function createUser(id, firstname, lastname, email, password, dob, phone, company) {
    try {
        const newUser = await users.create({
            id:id,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            dob: dob,
            phone: phone,
            company: company,
        });

        console.log('User created successfully');
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error; // Rethrow the error to handle it in the calling function
    }
}


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


async function updateUser(id, firstname, lastname, email, password, dob, phone, company) {
  try {
    const user = await users.findByPk(id);

    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }

    // Update user attributes
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = password;
    user.dob = dob;
    user.phone = phone;
    user.company = company;

    await user.save();

    console.log('User updated successfully');
    return user;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}





//    ----------------------------- DELETE -----------------------------    //
async function deleteUser(id) {
  try {
    const user = await users.findByPk(id);

    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }

    await user.destroy();

    console.log('User deleted successfully');
    return true;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

//    ----------------------------- Exports -----------------------------    //


module.exports = {
  sequelize,
  users,
  readId,
  loginVerify,
  admins,
  createUser,
  updateUser,
  deleteUser,
};