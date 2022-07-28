const { prismaClient } = require("../../../prisma-client");

class UserController {
  async create(req, res) {
    const { name, email } = req.body;

    const userExists = await prismaClient.user.findFirst({
      where: { email },
    });

    if (userExists) {
      return res
        .status(401)
        .json({ error: "User already exists! Please login in" });
    }

    const newUser = await prismaClient.user.create({
      data: {
        name,
        email,
      },
    });

    return res.status(201).json(newUser);
  }
}

module.exports = { UserController };
