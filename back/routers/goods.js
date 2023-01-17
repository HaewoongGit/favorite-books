const express = require("express");
const Goods = require("../schemas/Goods");

const router = express.Router();

router.get("/goods", async (req, res, next) => {
    try {
        if (Object.keys(req.query).length === 0) {
            const goods = await Goods.find({}).sort("-goodsId");
            res.json({ goods: goods });
        } else {
            const { category } = req.query;

            const goods = await Goods.find({ category }).sort("-goodsId");
            res.json({ goods: goods });
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.get("/goods/:goodsId", async (req, res) => {
    const { goodsId } = req.params;
    goods = await Goods.findOne({ goodsId: goodsId });
    res.json({ detail: goods });
});

router.post("/goods/sample", async (req, res) => {
    const { sample } = req.body;

    await Goods.create(sample);
    res.send({ result: "success" });
});

router.get("/create", async (req, res) => {
    await Goods.create();
});

module.exports = router;
