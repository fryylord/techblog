const { User } = require('../models');

const userData = [
  {
    username: "admin",
    email: "admin@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;