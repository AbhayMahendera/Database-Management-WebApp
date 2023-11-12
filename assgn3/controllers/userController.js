const userService = require('../services/usersService');

exports.getAllUsers = (req, res) => {
   try {
      const users = userService.getAllUsers();
      res.json(users);
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

exports.getUserById = (req, res) => {
   try {
      const userId = parseInt(req.params.id);
      const user = userService.getUserById(userId);

      if (user) {
         res.json(user);
      } else {
         res.status(404).json({ error: 'User not found' });
      }
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

exports.deleteUser = (req, res) => {
   try {
      const userId = parseInt(req.params.id);
      const success = userService.deleteUser(userId);

      if (success) {
         res.json({ success: true });
      } else {
         res.status(404).json({ error: 'User not found' });
      }
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

exports.addUser = (req, res) => {
   try {
      const newUser = req.body;
      const addedUser = userService.addUser(newUser);
      res.json(addedUser);
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
   }
};
