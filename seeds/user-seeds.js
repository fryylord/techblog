const { User } = require('../models');

const userData = [
  {
    username: "test1",
    password: "password1234"
  },
  {
    username: "test2",
    password: "password1234"
  },
  {
    username: "test3",
    password: "password1234"
  },
  {
    username: "test4",
    password: "password1234"
  },
  {
    username: "test4",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;