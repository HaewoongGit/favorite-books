const express = require("express");
const router = express.Router();
const Cart = require("../schemas/cart");


router.get("/cart", async (req, res) => {
    const cart = await Cart.find({});
    const goodsId = cart.map((cart) => cart.goodsId);

    goodsInCart = await Goods.find().where("goodsId").in(goodsId);

    concatCart = cart.map((c) => {
        for (let i = 0; i < goodsInCart.length; i++) {
            if (goodsInCart[i].goodsId == c.goodsId) {
                return { quantity: c.quantity, goods: goodsInCart[i] };
            }
        }
    });

    res.json({
        cart: concatCart,
        result: "/api/cart communication success",
    });
});

router.patch("/cart/update", async (req, res) => {
    let { quantity, goodsId } = req.body;

    quantity = parseInt(quantity);

    let cart = await Cart.find({ goodsId });
    if (cart.length) {
        await Cart.updateOne({ goodsId }, { $set: { quantity } });
    }

    res.send({ result: "/cart/update communication success" });
});

router.post("/cart/:goodsId", async (req, res) => {
    try {
        let { goodsId } = req.params;
        let { quantity } = req.body;

        quantity = parseInt(quantity);

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

router.delete("/cart/delete/:goodsId", async (req, res) => {
    try {
        let { goodsId } = req.params;

        goodsId = parseInt(goodsId);

        const isGoodsInCart = await Cart.find({ goodsId });

        if (isGoodsInCart.length > 0) {
            await Cart.deleteOne({ goodsId });
        }

        res.send({ result: "/cart/delete/:goodsId communication success" });
    } catch (err) {
        res.send({ result: err });
    }
});


module.exports = router;