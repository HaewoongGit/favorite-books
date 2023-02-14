const express = require("express");
const router = express.Router();
const Buy = require("../schemas/buy")
const Goods = require("../schemas/goods")
const authMiddleware = require("../middlewares/auth-middleware")

router.post("/buy", authMiddleware, async (req, res) => {
    try {
        const { nickname } = res.locals.user;
        const { recipient, contactInformation, address, buyList, totalPrice } = req.body;

        await Buy.create({ nickname, recipient, contactInformation, address, buyList, totalPrice });
        res.status(201).send("success")
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

router.get("/buy", authMiddleware, async (req, res) => {
    try {
        const { nickname } = res.locals.user;

        let buyCompleteInformation = await Buy.find({ nickname }).sort("-dateTime");
        let buyCompleteList = []
        for (const lists of buyCompleteInformation) {
            for (const list of lists.buyList) {
                list["date"] = lists.dateTime.getFullYear() + "-" + lists.dateTime.getMonth() + "-" + lists.dateTime.getDate();
                let goodsData = await Goods.findOne({ goodsId: list.goodsId });
                list["thumbnailUrl"] = goodsData.thumbnailUrl;
                buyCompleteList.push(list);
            }
        }
        res.status(200).send(buyCompleteList);
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;