const express = require("express");
const { userRoutes } = require("./routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json("OK");
});

app.use("/users", userRoutes);

module.exports = { app };
