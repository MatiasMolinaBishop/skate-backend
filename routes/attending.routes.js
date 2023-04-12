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
            const removeUserEvent = await Event.findByIdAndUpdate(eventId, { $pull: { attending: user._id } })
            res.json({ message: `no longer attending event with id: ${eventNames._id}` })
            // const removeUserEvent = await Event.findByIdAndUpdate(eventId, { $pull: { attending: user._id } })
            // res.json({ message: `no longer attending event with id: ${eventNames._id}` })
        } else {
            const attending = await User.findByIdAndUpdate(userId, { $push: { attending: event._id } })
            const attendingEvent = await Event.findByIdAndUpdate(eventId, { $push: { attending: user._id } })
            res.json({ message: `You are attending event with id: ${event._id}` })
            // const attendingEvent = await Event.findByIdAndUpdate(eventId, { $push: { attending: user._id } })
            // res.json({ message: `You are attending event with id: ${event._id}` })
        }

    } catch (error) {
        res.json(error)
    }
})

module.exports = router;


router.get('/attending/:eventId', async (req, res, next) => {
    const userId = req.payload._id
    const { eventId } = req.params

    try {
        // const attendingDb = await User.findById(userId).populate('attending')
        const attendingEventDb = await Event.findById(eventId).populate('attending')
        res.json(attendingEventDb)
    } catch (error) {
        console.log(error)
    }
}) 