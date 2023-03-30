const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const commentSchema = new Schema(
    {
        comment: {
            type: String,
            required: true,
        },
        creator: { type: Schema.Types.ObjectId, ref: 'User' },
        event: { type: Schema.Types.ObjectId, ref: 'Event' },
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
