const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Test Comment 1",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Test Comment 2",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Test Comment 3",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Test Comment 4",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Test Comment 5",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Test Comment 6",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
