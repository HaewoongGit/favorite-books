const express = require("express");
const Goods = require("../schemas/goods");
const Cart = require("../schemas/cart");

const cheerio = require("cheerio");
const axios = require("axios");
const iconv = require("iconv-lite");
const url =
    "http://www.yes24.com/24/Category/BestSeller";

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
        cart = await Cart.find({ goodsId });
    }

    res.send({ result: "/cart/update communication success" });
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

router.get("/goods/add/crawling", async (req, res) => {

    try {
        await axios({
            url: url,
            method: "GET",
            responseType: "arraybuffer",
        }).then(async (html) => {
            const content = iconv.decode(html.data, "EUC-KR").toString();
            const $ = cheerio.load(content);
            const list = $("ol li");
            await list.each(async (i, tag) => {
                let desc = $(tag).find("p.copy a").text()
                let image = $(tag).find("p.image a img").attr("src")
                let title = $(tag).find("p.image a img").attr("alt")
                let price = $(tag).find("p.price strong").text()

                if (desc && image && title && price) {
                    price = price.slice(0, -1).replace(/(,)/g, "")
                    let date = new Date()
                    let goodsId = date.getTime()
                    let isgood = await Goods.findOne({ name: title })

                    if (isgood === null) {
                        await Goods.create({
                            goodsId: goodsId,
                            name: title,
                            thumbnailUrl: image,
                            category: "도서",
                            price: price
                        })
                    }
                }
            })
        });
        res.send({ result: "success", message: "크롤링이 완료되었습니다." });

    } catch (error) {
        console.log(error)
        res.send({ result: "fail", message: "크롤링에 문제가 발생했습니다", error: error });
    }

});

module.exports = router;