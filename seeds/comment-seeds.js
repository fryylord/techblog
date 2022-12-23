const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "When you are logged in, comments can be left to any submitted post",
    post_id: 1,
    user_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
