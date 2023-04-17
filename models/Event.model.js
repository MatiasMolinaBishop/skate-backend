const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Email is required."],
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        img: {
            type: String,
            default: "https://images.unsplash.com/photo-1573733204684-128d0c72395a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        },
        creator: { type: Schema.Types.ObjectId, ref: 'User' },
        attending: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        location: { type: Schema.Types.ObjectId, ref: 'Location' },
        comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const Event = model("Event", eventSchema);

module.exports = Event;
