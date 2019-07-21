import Mongoose from 'mongoose';

const UserSchema = new Mongoose.Schema(
  {
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
  },
  { toJSON: { virtuals: true, versionKey: false } }
);

UserSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'author',
  justOne: false,
});

export default Mongoose.model('User', UserSchema);
