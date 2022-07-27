const { Router } = require("express");
const { errors } = require("celebrate");
const { JoiCreateUser } = require("../middlewares/usersJoi");

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
  const users = [
    {
      name: "Wellpinho",
      email: "wellpinho@outlook.com",
    },
  ];

  return res.status(200).json(users);
});

userRoutes.post("/", JoiCreateUser, (req, res) => {
  const user = req.body;
  return res.status(201).json(user);
});

userRoutes.use(errors());

module.exports = { userRoutes };
