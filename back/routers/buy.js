const express = require("express");
const router = express.Router();
const Buy = require("../schemas/buy")
const Goods = require("../schemas/goods")
const authMiddleware = require("../middlewares/auth-middleware")
const Joi = require("joi");

const buySchema = Joi.object({
    recipient: Joi.string().required(),
    contactInformation: Joi.string().pattern(new RegExp(
        /^01[016789]-\d{3,4}-\d{4}$/)).required(),
    address: Joi.string().required(),
    shoppingList: Joi.array().required(),
    totalPrice: Joi.number().required()
})

router.post("/buy", authMiddleware, async (req, res) => {
    try {
        const { nickname } = res.locals.user;
        const { recipient, contactInformation, address, shoppingList, totalPrice } = await buySchema.validateAsync(req.body);

        await Buy.create({ nickname, recipient, contactInformation, address, orderedList: shoppingList, totalPrice });
        res.status(201).send("success")
    } catch (error) {
        console.log(error);
        const errorMessage = error.details.map(detail => detail.message).join(',');
        if (errorMessage.includes("recipient"))
            res.status(400).send("수령인을 형식에 맞게 입력하세요.");
        else if (errorMessage.includes("contactInformation"))
            res.status(400).send("전화번호를 형식에 맞게 입력하세요.");
        else if (errorMessage.includes("address"))
            res.status(400).send("주소를 형식에 맞게 입력하세요.");
        else if (errorMessage.includes("shoppingList"))
            res.status(400).send("구매 상품 데이터가 잘못 입력됨.");
        else if (errorMessage.includes("totalPrice"))
            res.status(400).send("가격 정보가 잘못 입력됨.");
        else
            res.status(400).send(error);
    }
})

router.get("/buy", authMiddleware, async (req, res) => {
    try {
        const { nickname } = res.locals.user;

        let buyCompleteInformation = await Buy.find({ nickname }).sort("-dateTime");
        console.log(buyCompleteInformation);
        let orderHistory = []
        for (const lists of buyCompleteInformation) {
            for (const list of lists.orderedList) {
                list["date"] = lists.dateTime.getFullYear() + "-" + lists.dateTime.getMonth() + "-" + lists.dateTime.getDate();
                let goodsData = await Goods.findOne({ goodsId: list.goodsId });
                list["thumbnailUrl"] = goodsData.thumbnailUrl;
                orderHistory.push(list);
            }
        }
        res.status(200).send(orderHistory);
    } catch (err) {
        res.status(400).send(err);
    }
})

module.exports = router;