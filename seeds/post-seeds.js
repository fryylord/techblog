const { Post } = require('../models');

const postData = [
  {
    title: 'Test Post Title 1',
    post_text: 'Test Post Text 1',
    user_id: 1,
  },
  {
    title: 'Test Post Title 2',
    post_text: 'Test Post Text 2',
    user_id: 2,
  },
  {
    title: 'Test Post Title 3',
    post_text: 'Test Post Text 3',
    user_id: 2,
  },
  {
    title: 'Test Post Title 4',
    post_text: 'Test Post Text 4',
  },
  {
    title: 'Test Post Title 5',
    post_text: 'Test Post Text 5',
    user_id: 4,
  },
  {
    title: 'Test Post Title 6',
    post_text: 'Test Post Text 6',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
