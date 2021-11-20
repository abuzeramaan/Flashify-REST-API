const express = require("express");

const apodController = require("../controllers/apod");

const router = express.Router();

router.get("/apod", apodController.getApod);

module.exports = router;