const axios = require("axios");

exports.getSearch = (req, res, next) => {
    let searchKeyword = "venus";
    let url = "https://images-api.nasa.gov//search?q=";

    url = url + searchKeyword;
    // console.log(url);

    axios
        .get(url)
        .then((response) => {
            const imageData = response.data.collection.items;
            res.send(JSON.stringify(imageData));
        })
        .catch((error) => {
            console.log(error);
        });
};
