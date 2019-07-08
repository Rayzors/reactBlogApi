import Mongoose from 'mongoose';

export default Mongoose.model(
  'Post',
  new Mongoose.Schema({
    title: String,
    slug: String,
    author: String,
    type: String,
    content: String,
    date: { type: Date, default: Date.now },
  })
);
