const { celebrate, Joi, Segments } = require("celebrate");

const createUser = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
  }),
});

module.exports = { createUser };
