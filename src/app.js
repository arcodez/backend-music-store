const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Porti Backend Music Store");
});

module.exports = app;
