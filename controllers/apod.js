const axios = require("axios");

exports.getApod = (req, res, next) => {
    const url =
        "https://api.nasa.gov/planetary/apod?api_key=oCCmsqExPBfWPg8gBnjDf22WmPliusk2XPNK7tlO";
    axios
        .get(url)
        .then((response) => {
            const data = response.data;
            res.send(JSON.stringify(data));
        })
        .catch((error) => {
            console.log(error);
        });
};
