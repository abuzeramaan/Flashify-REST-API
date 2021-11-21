const express = require("express");
const bodyParser = require("body-parser");

const apodRoutes = require("./routes/apod");
const marsRoutes = require("./routes/mars");
const satelliteRoutes = require("./routes/satellite");
const searchRoutes = require("./routes/search");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});

app.use(apodRoutes);
app.use(marsRoutes);
app.use(satelliteRoutes);
app.use(searchRoutes);

app.listen(8080);
console.log("Your server is running on http://localhost:8080");
