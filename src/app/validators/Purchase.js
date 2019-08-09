import Joi from 'joi';

export default {
  body: {
    ad: Joi.string().required(),
    content: Joi.string().required(),
  },
};
