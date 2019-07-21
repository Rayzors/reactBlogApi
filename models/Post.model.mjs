import Mongoose from 'mongoose';

const PostSchema = new Mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    author: { type: Mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { toJSON: { versionKey: false } }
);

export default Mongoose.model('Post', PostSchema);
