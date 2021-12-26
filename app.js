const express = require("express");
const bodyParser = require("body-parser");

const apodRoutes = require("./routes/apod");
const marsRoutes = require("./routes/mars");
const satelliteRoutes = require("./routes/satellite");
const searchRoutes = require("./routes/search");

const app = express();

const PORT = process.env.PORT || 5000;

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

app.listen(PORT);
console.log("Your server is running on http://localhost:" + PORT);
