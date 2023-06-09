const express = require("express");
const router = express.Router();

const Event = require("../models/Event.model");
const Comment = require("../models/Comment.model");
const User = require("../models/User.model");
const { response } = require("../app");



router.post("/new-comment", async (req, res, next) => {

    const { comment, eventId } = req.body;

    console.log(req.payload)
    const userId = req.payload._id

    try {

        const newComment = await Comment.create({ comment, creator: userId, event: eventId })
        const userUpdate = await User.findByIdAndUpdate(userId, { $push: { comments: newComment._id } })
        const eventUpdate = await Event.findByIdAndUpdate(eventId, { $push: { comments: newComment._id } })
        res.json(newComment)

    } catch (err) {
        console.log(err)
    }
})

router.get("/comments", async (req, res, next) => {
    try {
        const commentsDb = await Comment.find().populate("creator")
        res.json(commentsDb)

    } catch (err) {
        console.log(err)
    }
})

module.exports = router;