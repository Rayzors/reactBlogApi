import jwt from 'jsonwebtoken';

export const auth (req, res, next) => {
  const token = req.header("auth-token");
  if(!token) return res.status(400).json({error: "Accès refusé"})

  try {
    const verified = jwt.verify(token, process.env.JWTSECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({error: "Mauvais token"});
  }
}