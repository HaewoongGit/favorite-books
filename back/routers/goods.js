const express = require("express");
const Goods = require("../schemas/Goods");

const router = express.Router();

let i = 1

router.get("/goods", async (req, res, next) => {
    try {
        const goods = await Goods.find();
        res.json({ goods: goods });
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

router.post("/goods", async (req, res) => {
    const { goodsId, name, thumbnailUrl, category, price } = req.body;

    isExist = await Goods.find({ goodsId });
    if (isExist.length == 0) {
        await Goods.create({ goodsId, name, thumbnailUrl, category, price });
    }
    res.send({ result: "success" });
});

router.post("/goods/sample", async (req, res) => {
    const { sample } = req.body;

    await Goods.create(sample);
    res.send({ result: "success" });
});


router.get("/create", async (req, res) => {
    await Goods.create()

})

module.exports = router;
