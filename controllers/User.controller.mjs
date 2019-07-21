import User from '../models/User.model.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {
  registerValidation,
  loginValidation,
} from '../validations/userValidation.mjs';

export const getAllUsers = async (req, res) => {
  try {
    const response = await User.find().populate('posts');
    return res.json(response);
  } catch (error) {
    return res.json({ error });
  }
};

export const login = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.json({ error: error.details[0].message });

  const userExist = await User.findOne({ email: req.body.email });
  if (!userExist) return res.json({ error: 'Mauvais email' });

  const validPassword = await bcrypt.compare(
    req.body.password,
    userExist.password
  );

  if (!validPassword) return res.json({ error: 'Mauvais mot de passe' });

  const token = jwt.sign({ _id: userExist._id }, process.env.JWTSECRET);
  res.header('auth-token', token).json({ token });
};

export const register = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.json({ error: error.details[0].message });

  const userExist = await User.findOne({ email: req.body.email });
  if (userExist) return res.json({ error: 'Cet email est déjà utilisé' });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const response = await user.save();
    res.json({ user: response._id });
  } catch (error) {
    res.status(400).json({ error });
  }
};
