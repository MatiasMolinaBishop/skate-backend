const express = require("express");
const router = express.Router();

router.get("/locations", async (req, res, next) => {
    try {
        const response = await Location.find()
        res.json(response)

    } catch (err) {
        console.log(err)
    }
});

module.exports = router;
