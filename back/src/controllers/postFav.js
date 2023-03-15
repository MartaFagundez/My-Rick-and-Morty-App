const favs = require("../utils/favs");

const postFav = (req, res) => {
    favs.push(req.body);
    res.status(201).json(favs);
}

module.exports = postFav;