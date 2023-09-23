const express = require("express");
const router = express.Router();

// define the home page route
router.get("/:serviceID", (req, res) => {
    res.send("callback page");
});
router.all("*", (req, res) => {
    res.send("You look lost");
});

module.exports = router;
