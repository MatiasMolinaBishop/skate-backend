const { Schema, model } = require("mongoose");

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
        coordinates: {
            type: String,
            required: [true, "Password is required."],
        },
        description: {
            type: String,
            required: true
        },
        img: {
            type: Text,
            required: true
        }
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
);

const Location = model("User", locationSchema);

module.exports = Location;
