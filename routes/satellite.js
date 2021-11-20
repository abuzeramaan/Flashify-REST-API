const express = require("express");

const satelliteController = require("../controllers/satellite");

const router = express.Router();

router.post("/satellite");

module.exports = router;
