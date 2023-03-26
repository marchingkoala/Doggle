const express = require("express");
const router = express.Router();

router.use("/pups", require("./pups"))

module.exports = router;