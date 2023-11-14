const router = require("express").Router();
const {
    postfavbyID,
getfavbyID,
} = require("./favorites.controller");

router.post("/", postfavbyID);
router.get("/:id", getfavbyID);

module.exports = router;