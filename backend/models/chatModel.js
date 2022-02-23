// chatName
// isGroupChat
// users
// latestMessages
// groupAdmin - If its a group chat

const mongoose = require('mongoose');

const chatModel = mongoose.Schema({
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    // default false above means that it is not a group chat by default
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
},
    {
        timestamps: true
    });

const Chat = mongoose.Model("Chat", chatModel);

module.exports = Chat;