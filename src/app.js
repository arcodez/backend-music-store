const { urlencoded } = require("express");
const express = require("express");
const app = express();

app.use(express.json());
app.use(urlencoded);

app.get("/", (req, res) => {
  res.send("Porti Backend Music Store");
});

// Routes
app.use("/musica", require("./routes/musica.routes"));

module.exports = app;
