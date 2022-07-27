const express = require("express");
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

module.exports = { app };
