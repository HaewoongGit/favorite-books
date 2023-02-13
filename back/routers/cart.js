const express = require("express");
const router = express.Router();
const Cart = require("../schemas/cart");
const Goods = require("../schemas/goods");
const authMiddleware = require("../middlewares/auth-middleware")


router.get("/cart", authMiddleware, async (req, res) => {
    try {
        const { nickname } = res.locals.user
        const cart = await Cart.find({ nickname });
        const goodsId = cart.map((cart) => cart.goodsId);


        goodsInCart = await Goods.find().where("goodsId").in(goodsId);

        concatCart = cart.map((c) => {
            for (let i = 0; i < goodsInCart.length; i++) {
                if (goodsInCart[i].goodsId == c.goodsId) {
                    return { quantity: c.quantity, goods: goodsInCart[i] };
                }
            }
        });

        res.status(200).json(
            concatCart
        );
    } catch (err) {
        res.status(400).send(err);
    }

});

router.patch("/cart/update", authMiddleware, async (req, res) => {
    try {
        const { nickname } = res.locals.user;
        let { quantity, goodsId } = req.body;

        quantity = parseInt(quantity);

        let cart = await Cart.find({ goodsId, nickname });
        if (cart.length) {
            await Cart.updateOne({ goodsId, nickname }, { $set: { quantity } });
        }

        res.status(200);
    } catch (err) {
        res.status(400).send(err);
    }

});

router.post("/cart/:goodsId", authMiddleware, async (req, res) => {
    try {
        const { nickname } = res.locals.user
        let { goodsId } = req.params;
        let { quantity } = req.body;

        quantity = parseInt(quantity);

        isCart = await Cart.find({ goodsId, nickname });

        if (isCart.length) {
            await Cart.updateOne({ goodsId, nickname }, { $set: { quantity } });
        } else {
            await Cart.create({ goodsId, nickname, quantity });
        }

        res.status(201);
    } catch (err) {
        console.log(err);
        res.status(400).send({ errorMessage: err });
    }
});

router.delete("/cart/delete/:goodsId", authMiddleware, async (req, res) => {
    try {
        const { nickname } = res.locals.user
        let { goodsId } = req.params;

        goodsId = parseInt(goodsId);

        const isGoodsInCart = await Cart.find({ goodsId, nickname });

        if (isGoodsInCart.length > 0) {
            await Cart.deleteOne({ goodsId, nickname });
        }
        res.status(200);
    } catch (err) {
        res.status(400).send(err);
    }
});


module.exports = router;