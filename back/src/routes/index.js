const {Router} = require("express");
const {getCharById} = require("../controllers/getCharById");
const {getCharDetail} = require("../controllers/getCharDetail");
const postFav = require("../controllers/postFav");
const getFavs = require("../controllers/getFavs");
const deleteFav = require("../controllers/deleteFav");

const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id",getCharDetail);

router.post("/favs", postFav);
router.get("/favs", getFavs);
router.delete("/favs/:id", deleteFav);




module.exports = router;