import Joi from '@hapi/joi';

export const postValidation = (data) => {
  const schema = Joi.object().keys({
    _id: Joi.string(),
    title: Joi.string()
      .min(3)
      .max(30)
      .required(),
    slug: Joi.string()
      .min(3)
      .max(30)
      .required(),
    author: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    type: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    content: Joi.string()
      .min(3)
      .max(255)
      .required(),
  });

  return Joi.validate(data, schema);
};
