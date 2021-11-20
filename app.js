const express = require("express");
const bodyParser = require("body-parser");

const apodRoutes = require("./routes/apod");
const marsRoutes = require("./routes/mars");
const satelliteRoutes = require("./routes/satellite");

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

// app.get("/", (req, res, next) => {
//     res.send("HELLO");
// });

app.listen(8080);
