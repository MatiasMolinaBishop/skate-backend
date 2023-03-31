const express = require("express");
const { eventNames } = require("../models/Comment.model");
const router = express.Router();

const Event = require("../models/Event.model");
const User = require("../models/User.model");


router.post("/attending/:eventId", async (req, res, next) => {
    const { eventId } = req.params
    const userId = req.payload._id

    try {
        const event = await Event.findById(eventId)
        const user = await User.findById(userId)

        if (user.attending.includes(eventId)) {
            const removeEvent = await User.findByIdAndUpdate(userId, { $pull: { attending: event._id } })
            res.json({ message: `no longer attending event with id: ${eventNames._id}` })
        } else {
            const attending = await User.findByIdAndUpdate(userId, { $push: { attending: event._id } })
            res.json({ message: `You are attending event with id: ${event._id}` })
        }

    } catch (error) {
        res.json(error)
    }
})

module.exports = router;


router.get('/attending', async (req, res, next) => {
    const userId = req.payload._id

    try {
        const attendingDb = await User.findById(userId).populate('attending')
        res.json(attendingDb)
    } catch (error) {
        console.log(error)
    }
}) 