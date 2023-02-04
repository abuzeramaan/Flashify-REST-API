const fetch = require("node-fetch");

exports.getSatelliteImages = (req, res, next) => {
    let latitude = req.query.latitude;
    let longitude = req.query.longitude;
    let date = req.query.date;

    // console.log(req.query);

    let url = `https://api.nasa.gov/planetary/earth/imagery?lon=${longitude}&lat=${latitude}&date=${date}&api_key=xonwwAfii1hpckDcgQiMNRu34oXfDuBYhKQsDelk`;

    console.log(url);

    fetch(url)
        .then((response) => {
            res.setHeader("Content-Type", response.headers.get("Content-Type"));
            response.body.pipe(res);
        })
        .catch((error) => {
            console.log(error);
        });
};
