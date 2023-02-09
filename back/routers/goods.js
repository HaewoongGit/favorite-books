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
            console.log(req.query);

            const goods = await Goods.find({ category }).sort("-goodsId");
            res.json(goods);
        }
    } catch (err) {
        res.send(err);
    }
});

router.get("/goods/:goodsId", async (req, res) => {
    try {
        const { goodsId } = req.params;
        goods = await Goods.findOne({ goodsId: goodsId });
        res.json(goods);
    } catch (err) {
        res.send(err);
    }
});



module.exports = router;