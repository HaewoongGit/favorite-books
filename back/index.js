require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');

const goodsRouter = require("./routers/goods");
const cartRouter = require("./routers/cart");
const userRouter = require("./routers/user")
const crawlingRouter = require("./routers/crawling");
const buyRouter = require("./routers/buy")
const connect = require("./schemas");
connect();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use("/api", goodsRouter, cartRouter, crawlingRouter, userRouter, buyRouter);

app.get("/", (req, res) => {
    res.render("./public/index.html");
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});