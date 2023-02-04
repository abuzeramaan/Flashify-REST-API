const axios = require("axios");

exports.getApod = (req, res, next) => {
    const url =
        "https://api.nasa.gov/planetary/apod?api_key=xonwwAfii1hpckDcgQiMNRu34oXfDuBYhKQsDelk";
    axios
        .get(url)
        .then((response) => {
            console.log("APOD");
            const data = response.data;
            res.setHeader("Content-Type", "application/json");
            res.send(JSON.stringify(data));
        })
        .catch((error) => {
            console.log(error);
        });
};
