const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const axios = require("axios");
const iconv = require("iconv-lite");
const url =
    "http://www.yes24.com/24/Category/BestSeller";
const Goods = require("../schemas/goods");



router.get("/crawling", async (req, res) => {
    try {
        await axios({
            url: url,
            method: "GET",
            responseType: "arraybuffer",
        }).then(async (html) => {
            let goodsId = 1
            const content = iconv.decode(html.data, "EUC-KR").toString();
            const $ = cheerio.load(content);
            const list = $("ol li");
            await list.each(async (i, tag) => {
                let desc = $(tag).find("p.copy a").text()
                let image = $(tag).find("p.image a img").attr("src")
                let title = $(tag).find("p.image a img").attr("alt")
                let price = $(tag).find("p.price strong").text()
                let category = $(tag).find("p:nth-child(3)").contents().first().text()

                if (desc && image && title && price && category) {
                    price = price.slice(0, -1).replace(/(,)/g, "")
                    let isgood = await Goods.findOne({ name: title })
                    category = category.slice(1, -2)
                    const maxGoodsId = await Goods.findOne().sort({ goodsId: -1 });

                    if (maxGoodsId) {
                        goodsId = maxGoodsId.goodsId
                    }

                    if (isgood === null) {
                        await Goods.create({
                            goodsId,
                            name: title,
                            thumbnailUrl: image,
                            category,
                            price: price,
                            desc
                        }).then(goodsId++)


                    }

                }
            })
        });
        res.status(201).send({ result: "success", message: "크롤링이 완료되었습니다." });

    } catch (error) {
        res.status(400).send({ result: "fail", message: "크롤링에 문제가 발생했습니다", error: error });
    }
});


module.exports = router;