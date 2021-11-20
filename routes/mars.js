const express = require("express");

const marsController = require("../controllers/mars");

const router = express.Router();

router.get("/mars", marsController.getMars);

module.exports = router;