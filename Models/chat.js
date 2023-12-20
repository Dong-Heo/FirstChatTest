const mongoose = require("mongoose");

const chatSchema = new montoose.Schema(
    {
        chat: String,
        user: {
            id: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
            },
            name: String,
        },
    },
    { timestamp: true }
);

module.exports = mongoose.model("Chat", chatSchema);