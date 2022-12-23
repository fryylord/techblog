const { Post } = require('../models');

const postData = [
  {
    title: 'Welcome to this Tech Blog',
    post_content: 'You can click on the post title to expand the post and see comments',
    user_id: 1,
  }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
