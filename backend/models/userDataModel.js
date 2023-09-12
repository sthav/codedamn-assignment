const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            requried: true,
        },
        username: {
            type: String,
            unique: true,
            requried: true,
        },
        about: {
            type: String,
            requried: true,
        },
        dob: {
            type: Number,
            requried: true,
        },
        gender: {
            type: String,
            requried: true,
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userDataSchema);

module.exports = User;