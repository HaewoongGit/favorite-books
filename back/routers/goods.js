const express = require("express");
const Goods = require("../schemas/Goods");

const Cart = require("../schemas/cart");

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

router.post("/goods/:goodsId/cart", async (req, res) => {
    try {
        let { goodsId } = req.params;
        let { quantity } = req.body;

        goodsId = parseInt(goodsId);

        isCart = await Cart.find({ goodsId });

        if (isCart.length) {
            await Cart.updateOne({ goodsId }, { $set: { quantity } });
        } else {
            await Cart.create({ goodsId: goodsId, quantity: quantity });
        }
        res.send({ result: "success" });
    } catch (err) {
        console.log(err);
    }
});

router.get("/create", async (req, res) => {
    await Goods.create();
});

module.exports = router;
