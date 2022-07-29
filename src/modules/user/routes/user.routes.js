const { Router } = require("express");
const { errors } = require("celebrate");

const {
  JoiCreateUser,
  JoiUpdateUser,
} = require("./../../../middlewares/usersJoi");
const { UserController } = require("../controllers/UserController");

const userRoutes = Router();
const userController = new UserController();

userRoutes.get("/", (req, res) => {
  const users = [
    {
      name: "Wellpinho",
      email: "wellpinho@outlook.com",
    },
  ];

  return res.status(200).json(users);
});

userRoutes.post("/", JoiCreateUser, userController.create);
userRoutes.put("/:id", JoiUpdateUser, userController.update);

userRoutes.use(errors());

module.exports = { userRoutes };
