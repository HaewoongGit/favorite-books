const mongoose = require("mongoose");

const goodsSchema = new mongoose.Schema({
    goodsId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    thumbnailUrl: {
        type: String,
        index: false
    },
    category: {
        type: String,
        index: false
    },
    price: {
        type: Number,
        index: false
    },
    desc: {
        type: String,
        index: false
    }
});

module.exports = mongoose.model("Goods", goodsSchema);