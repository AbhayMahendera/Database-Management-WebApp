const fs = require('fs');
const userData = JSON.parse(fs.readFileSync('data/fakeUsers.json'));

exports.getAllUsers = () => {
   return userData;
};

exports.getUserById = (userId) => {
   return userData.find(user => user.id === userId);
};

exports.deleteUser = (userId) => {
   const index = userData.findIndex(user => user.id === userId);

   if (index !== -1) {
      userData.splice(index, 1);
      return true;
   }

   return false;
};

exports.addUser = (newUser) => {
   const newUserId = userData.length + 1;
   const user = { id: newUserId, ...newUser };
   userData.push(user);
   return user;
};
