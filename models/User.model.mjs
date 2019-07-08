import Mongoose from 'mongoose';

export default Mongoose.model(
  'User',
  new Mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
  })
);
