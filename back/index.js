const express = require("express");
const app = express();
const port = 3000;

const goodsRouter = require("./routes/goods");
const userRouter = require("./routes/user");
const mongoose = require("mongoose");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use("/goods", goodsRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.render("./public/index.html");
});

app.get("/example", (req, res) => {
    res.render("index");
});

app.get("/example/detail", (req, res) => {
    res.render("detail");
});

app.get("/mongodb", async (req, res) => {
    await mongoose.connect("mongodb://localhost:27017", {});

    res.send("ok");
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}/example`);
});
