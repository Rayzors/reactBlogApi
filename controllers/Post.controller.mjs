import Post from '../models/Post.model.mjs';
import { postValidation } from '../validations/postValidation.mjs';

import _ from 'lodash';

export const index = async (req, res) => {
  try {
    let response;
    if (req.params.type) {
      response = await Post.find({ type: req.params.type });
    } else {
      response = await Post.find();
    }
    return res.json(response);
  } catch (error) {
    return res.json({ error });
  }
};

export const add = async (req, res) => {
  const { error } = postValidation(req.body);
  if (error) return res.json({ error: error.details[0].message });

  if (req.body._id && req.body._id !== '') {
    try {
      const response = await Post.findOneAndUpdate(
        { _id: req.body._id },
        { ...req.body },
        { new: true }
      );
      return res.json(response);
    } catch (error) {
      return res.json({ error });
    }
  }

  const post = new Post({
    ...req.body,
    slug: _.kebabCase(req.body.title),
  });

  try {
    const response = await post.save();
    return res.json(response);
  } catch (error) {
    return res.json({ error });
  }
};

export const remove = async (req, res) => {
  try {
    const response = await Post.findOneAndDelete({ _id: req.params.id });
    return res.json(response);
  } catch (error) {
    return res.json({ error });
  }
};
