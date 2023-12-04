const sequelize = require('../sequelize');

exports.getAllUsers = () => {
   return usersModel.getAllUsers();
};

exports.getUserById = (userId) => {
   return usersModel.getUserById(userId);
};

exports.deleteUser = (userId) => {
   return usersModel.deleteUser(userId);
};

exports.addUser = (newUser) => {
   return usersModel.addUser(newUser);
};
