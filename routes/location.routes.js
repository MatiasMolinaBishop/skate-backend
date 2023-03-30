const express = require("express");
const router = express.Router();

const Location = require("../models/Location.model");
//In order to populate and be able to show this relationship between our models we must also import the Event model
const Event = require("../models/Event.model");

router.get("/locations", async (req, res, next) => {
    try {
        const response = await Location.find()
        res.json(response)

    } catch (err) {
        console.log(err)
    }
});

router.get("/locations/:id", async (req, res, next) => {
    const id = req.params.id

    try {
        const response = await Location.findById(id).populate('events')
        res.json(response)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;
