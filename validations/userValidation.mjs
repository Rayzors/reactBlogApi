import Joi from '@hapi/joi';

export const registerValidation = (data) => {
  const schema = Joi.object().keys({
    name: Joi.string()
      .min(3)
      .max(30)
      .required(),
    email: Joi.string()
      .min(3)
      .max(30)
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .max(30)
      .required(),
  });

  return Joi.validate(data, schema);
};

export const loginValidation = (data) => {
  const schema = Joi.object().keys({
    email: Joi.string()
      .min(3)
      .max(30)
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .max(30)
      .required(),
  });

  return Joi.validate(data, schema);
};
