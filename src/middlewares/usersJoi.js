const { celebrate, Joi, Segments } = require("celebrate");

const JoiCreateUser = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
});

const JoiUpdateUser = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().required(),
  }),
});

module.exports = { JoiCreateUser, JoiUpdateUser };
