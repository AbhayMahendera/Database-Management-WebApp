const usersService = require('./usersService');
const userData = require('../fakeUsers.json');

exports.login = (email, password) => {
   const user = userData.find(u => u.email === email && u.password === password);

   if (user && user.isAdmin) {
      return { isAuthenticated: true };
   } else {
      throw new Error('Unauthorized');
   }
};
