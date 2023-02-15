const mongoose = require("mongoose");

const buySchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        index: false
    },
    recipient: {
        type: String,
        required: true,
        index: false
    },
    contactInformation: {
        type: String,
        required: true,
        index: false
    },
    address: {
        type: String,
        required: true,
        index: false
    },
    orderedList: {
        type: Array,
        required: true,
        index: false
    },
    dateTime: {
        type: Date,
        default: Date.now,
        index: false
    },
    totalPrice: {
        type: Number,
        required: true,
        index: false
    }
});

module.exports = mongoose.model("Buy", buySchema);
