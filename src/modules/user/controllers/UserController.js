const bcrypt = require("bcrypt");
const { prismaClient } = require("../../../prisma-client");

class UserController {
  async create(req, res) {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const userExists = await prismaClient.user.findFirst({
      where: { email },
    });

    if (userExists) {
      return res
        .status(400)
        .json({ error: "User already exists! Please login in" });
    }

    const createUser = await prismaClient.user.create({
      data: { name, email, password: hashedPassword },
    });

    return res.status(201).json({
      name: createUser.name,
      email: createUser.email,
    });
  }

  async update(req, res) {
    const { id } = req.params;
    const { email } = req.body;

    const userNotExists = await prismaClient.user.findUnique({
      where: { id },
    });

    if (!userNotExists) {
      return res.status(400).json({ error: "User not found!" });
    }

    const user = await prismaClient.user.update({
      where: { id },
      data: { email },
    });

    return res.status(201).json(user);
  }
}

module.exports = { UserController };
