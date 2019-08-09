import Joi from 'joi';

export default {
  body: {
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required(),
  },
};
