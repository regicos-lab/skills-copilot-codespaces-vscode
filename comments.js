// Create web server
// npm install express
// npm install body-parser
// npm install mongoose
// npm install nodemon

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./models/comment');
const app = express();

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Get all comments
app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

// Create a comment
app.post('/comments', async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.json(comment);
});

// Update a comment
app.put('/comments/:id', async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findByIdAndUpdate(id, req.body);
  res.json(comment);
});

// Delete a comment
app.delete('/comments/:id', async (req, res) => {
  const { id } = req.params;
  await Comment.findByIdAndDelete(id);
  res.json({ message: 'Comment deleted' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started');
});