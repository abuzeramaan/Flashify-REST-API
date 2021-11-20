const axios = require("axios");

exports.getMars = (req, res, next) => {
    const url =
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=oCCmsqExPBfWPg8gBnjDf22WmPliusk2XPNK7tlO";
    axios
        .get(url)
        .then((response) => {
            const images = response.data.photos;
            res.send(JSON.stringify(images));
            // console.log(response.data.photos);
        })
        .catch((error) => {
            console.log(error);
        });
};
