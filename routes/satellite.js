const express = require("express");

const satelliteController = require("../controllers/satellite");

const router = express.Router();

router.get("/satellite", satelliteController.getSatelliteImages);

module.exports = router;
