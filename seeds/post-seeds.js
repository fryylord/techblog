const { Post } = require('../models');

const postData = [
  {
    title: 'Test Post 1',
    post_text: 'atiojoin aoifsjdn aoisfjnd ionoailfdsn naoilfsd',
    user_id: 1,
  },
  {
    title: 'Test Post 2',
    post_text: 'atiojoin aoifsjdn aoisfjnd ionoailfdsn naoilfsd',
    user_id: 2,
  },
  {
    title: 'Test Post 3',
    post_text: 'atiojoin aoifsjdn aoisfjnd ionoailfdsn naoilfsd',
    user_id: 2,
  },
  {
    title: 'Test Post 4',
    post_text: 'atiojoin aoifsjdn aoisfjnd ionoailfdsn naoilfsd',
    user_id: 3,
  },
  {
    title: 'Test Post 5',
    post_text: 'atiojoin aoifsjdn aoisfjnd ionoailfdsn naoilfsd',
    user_id: 4,
  },
  {
    title: 'Test Post 6',
    post_text: 'atiojoin aoifsjdn aoisfjnd ionoailfdsn naoilfsd',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;