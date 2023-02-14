const express = require("express");
const router = express.Router();
const Buy = require("../schemas/buy")
const authMiddleware = require("../middlewares/auth-middleware")

router.post("/buy", authMiddleware, async (req, res) => {
    try {
        const { nickname } = res.locals.user;
        const { recipient, contactInformation, address, buyList, totalPrice } = req.body;

        console.log(recipient, contactInformation, address, buyList, totalPrice);

        await Buy.create({ nickname, recipient, contactInformation, address, buyList, totalPrice });
        res.status(201).send("success")
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

module.exports = router;