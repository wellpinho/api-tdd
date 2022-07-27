const express = require("express");
const { errors } = require("celebrate");
const { createUser } = require("./middlewares/usersJoi");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json("OK");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Wellpinho",
      email: "wellpinho@outlook.com",
    },
  ];

  return res.status(200).json(users);
});

app.post("/users", createUser, (req, res) => {
  const user = req.body;
  return res.status(201).json(user);
});

app.use(errors());

module.exports = { app };
