const express = require("express");
const router = express.Router();

const Location = require("../models/Location.model");
const Event = require("../models/Event.model");
const Comment = require("../models/Comment.model");
const User = require("../models/User.model");


// router.post('/events', async (req, res, next) => {

//     const { title, description, img, locationId } = req.body;

//     console.log(req.body)
//     console.log('WHAT THE FUCK')
//     console.log(req.payload)
//     //const userId = req.payload._id

//     try {
//         const event = await Event.create({ title, description, img, creator: '6425afc62ee8df2c9917db56', location: locationId, attending: [], comments: [] })
//         const userUpdate = await User.findByIdAndUpdate('6425afc62ee8df2c9917db56', { $push: { events: event._id } })
//         const locationUpdate = await Location.findByIdAndUpdate(locationId, { $push: { events: event._id } })
//         res.json(event)
//     } catch (err) {
//         console.log(err)
//     }
// });


router.post('/events', async (req, res, next) => {

    const { title, description, img, locationId } = req.body;

    console.log(req.payload)
    const userId = req.payload._id

    try {
        const event = await Event.create({ title, description, img, creator: userId, location: locationId, attending: [], comments: [] })
        const userUpdate = await User.findByIdAndUpdate(userId, { $push: { events: event._id } })
        const locationUpdate = await Location.findByIdAndUpdate(locationId, { $push: { events: event._id } })
        res.json(event)
    } catch (err) {
        console.log(err)
    }
});




module.exports = router;