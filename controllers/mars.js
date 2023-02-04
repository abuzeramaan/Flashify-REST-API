const fetch = require("node-fetch");
const axios = require("axios");

exports.getMars = (req, res, next) => {
    const url =
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=xonwwAfii1hpckDcgQiMNRu34oXfDuBYhKQsDelk";
    axios
        .get(url)
        .then((response) => {
            const images = response.data.photos;
            res.setHeader("Content-Type", "application/json");
            res.send(JSON.stringify(images));
            // console.log(response.data.photos);
        })
        .catch((error) => {
            console.log(error);
        });
};
