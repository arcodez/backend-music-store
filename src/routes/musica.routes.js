const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("Musica Routes");
});

module.exports = router;
