const express = require("express");
const Goods = require("../schemas/goods");
const router = express.Router();

router.get("/goods", async (req, res, next) => {
    try {
        if (Object.keys(req.query).length === 0) {
            const goods = await Goods.find({}).sort("-goodsId");
            res.json({ goods: goods });
        } else {
            const { category } = req.query;

            const goods = await Goods.find({ category }).sort("-goodsId");
            res.status(200).json({ goods: goods });
        }
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get("/goods/:goodsId", async (req, res) => {
    try {
        const { goodsId } = req.params;
        goods = await Goods.findOne({ goodsId: goodsId });
        res.status(200).json(goods);
    } catch (err) {
        res.status(400).send(err);
    }
});



module.exports = router;