const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Porti Backend Music Store");
});

// Routes
app.use(require("./routes/musica.routes"));

module.exports = app;
