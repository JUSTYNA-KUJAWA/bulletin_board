const Post = require('../models/post.model');
const NODE_ENV = process.env.NODE_ENV;

exports.getAllPosts = async (req, res) => {
  try {
    const result = await Post
      .find()
      .sort({created: -1});
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

exports.getPostById = async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id);
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

exports.addNewPost = async (req, res) => {
  const { mail, created, status, title, text, image, price, phone, location } = req.body;

  try {
    const newPost = new Post({ mail, created, status, title, text, image, price, phone, location });
    await newPost.save();
    res.json(newPost);
  } catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

exports.editPost = async (req, res) => {
  const { 
    mail, created, updated, status, title, text, image, price, phone, location } = req.body;

  try {
    const post = await Post.findById(req.params.id);
    if(post){
      post.mail =mail;
      post.created = created;
      post.updated = updated;
      post.status = status;
      post.title = title;
      post.text = text;
      post.image = image;
      post.price = price;
      post.phone = phone;
      post.location = location;
      await post.save();
      res.json(await Post.findById(req.params.id));
    } else res.status(404).json({ message: 'Not found' });
  }
  catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = Post.findById(req.params.id);
    if(post){
      await Post.deleteOne({ _id: req.params.id });
      res.json(req.params.id);
    } else res.status(404).json({ message: 'Not found' });
  }
  catch(err) {
    if(NODE_ENV === 'production') console.log('Database error...');
    else res.status(500).json(err);
  }
};