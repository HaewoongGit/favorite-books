const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    goodsId: {
        type: Number,
        required: true,
        index: false
    },
    quantity: {
        type: Number,
        required: true,
        index: false
    },
    nickname: {
        type: String,
        required: true,
        index: false
    }
});

module.exports = mongoose.model("Cart", cartSchema);
