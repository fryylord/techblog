const { User } = require('../models');

const userData = [
  {
    username: "test1",
    email: "test1@gmail.com",
    password: "password1234"
  },
  {
    username: "test2",
    email: "test2@gmail.com",
    password: "password1234"
  },
  {
    username: "test3",
    email: "test3@gmail.com",
    password: "password1234"
  },
  {
    username: "test4",
    email: "emily@gmail.com",
    password: "password1234"
  },
  {
    username: "test4",
    email: "john@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;