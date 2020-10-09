const {Router} = require("express");
const router = Router();

const db = require("../db");

router.get("/", (req, res) => {
  res.json("hey, we sent some data from the server");
})

module.exports = router;