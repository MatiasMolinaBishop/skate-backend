const mongoose = require('mongoose');
const { Schema, model } = mongoose;


// TODO: Please make sure you edit the User model to whatever makes sense in this case
const locationSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Email is required."],
            unique: true,
            lowercase: true,
            trim: true,
        },
        altitude: {
            type: Number,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        img: {
            type: String,
            default: "https://images.unsplash.com/photo-1573733204684-128d0c72395a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        },
        events: [{ type: Schema.Types.ObjectId, ref: 'Event' }]
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const Location = model("Location", locationSchema);

module.exports = Location;
