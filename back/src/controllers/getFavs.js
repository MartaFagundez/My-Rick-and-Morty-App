const favs = require("../utils/favs");

const getFavs = (req, res) => {
    res.status(200).json(favs);
}

module.exports = getFavs;