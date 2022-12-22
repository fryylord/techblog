const { User } = require('../models');

const userData = [
  {
    username: "TestUserOne",
    email: "TestUserOne@gmail.com",
    password: "password1234"
  },
  {
    username: "TestUserTwo",
    email: "TestUserTwo@gmail.com",
    password: "password1234"
  },
  {
    username: "TestUserThree",
    email: "TestUserThree@gmail.com",
    password: "password1234"
  },
  {
    username: "TestUserFour",
    email: "TestUserFour@gmail.com",
    password: "password1234"
  },
  {
    username: "TestUserFive",
    email: "TestUserFive@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
