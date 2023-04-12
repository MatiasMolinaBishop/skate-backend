const express = require("express");
const router = express.Router();

const Comment = require("../models/Comment.model");
const Event = require("../models/Event.model");
const User = require("../models/User.model");

router.get("/users", async (req, res, next) => {
    try {
        const response = await User.find()
        res.json(response)

    } catch (err) {
        console.log(err)
    }
});

router.get("/profile", async (req, res) => {
    const currentUser = req.payload._id
    try {
        const response = await User.findById(currentUser).populate("comments events attending")
        res.json(response)
    } catch (error) {
        res.json(error)
    }
})

router.get('/profile/:userId', async (req, res, next) => {

    // console.log(req.payload)
    // const userId = req.payload._id
    const { userId } = req.params

    try {
        const response = await User.findById(userId)
        res.json(response)
    } catch (err) {
        console.log(err)
    }
});

router.patch("/profile/edit", async (req, res) => {
    const userId = req.payload._id
    const userUpdate = req.body
    try {
        const userDB = await User.findByIdAndUpdate(userId, userUpdate, { new: true })
        res.json(userDB)
    } catch (error) {
        res.json(error)
    }
})


module.exports = router;