const { Router } = require("express");
const router = Router();

router.get("/musica", (req, res) => {
  res.send("Musica Routes");
});

module.exports = router;
