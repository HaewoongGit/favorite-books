const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    goodsId: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    nickname: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Cart", cartSchema);
