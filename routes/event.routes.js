const express = require("express");
const router = express.Router();

const Location = require("../models/Location.model");
const Event = require("../models/Event.model");
const Comment = require("../models/Comment.model");
const User = require("../models/User.model");

router.post('/new-event', async (req, res, next) => {

    const { title, description, img, locationId, date } = req.body;

    console.log(req.payload)
    const userId = req.payload._id

    try {
        const event = await Event.create({ title, description, img, date, creator: userId, location: locationId, attending: [], comments: [] })
        const userUpdate = await User.findByIdAndUpdate(userId, { $push: { events: event._id } })
        const locationUpdate = await Location.findByIdAndUpdate(locationId, { $push: { events: event._id } })
        res.json(event)
    } catch (err) {
        console.log(err)
    }
});

router.get("/events", async (req, res, next) => {
    try {
        const eventsDb = await Event.find().populate("creator location")
        res.json(eventsDb)
    } catch (error) {
        res.json(error)
    }
})


router.get("/events/:id", async (req, res, next) => {

    const { id } = req.params
    try {
        const eventDb = await Event.findById(id).populate("creator attending location comments")
        res.json(eventDb)
    } catch (error) {
        res.json(error)
    }
})

//NEW

router.put("/events/:id", async (req, res) => {

    const { id } = req.params

    try {
        const eventDB = await Event.findByIdAndUpdate(id, req.body, { new: true })
        res.json(eventDB)
    } catch (error) {
        res.json(error)
    }
})
router.delete("/events/:id", async (req, res) => {
    const { id } = req.params

    try {
        const eventDeleted = await Event.findByIdAndRemove(id)
        res.json({ message: `event with id ${eventDeleted._id} deleted` })
    } catch (error) {
        res.json(error)
    }
})



module.exports = router;