const express = require("express");
const app = express();
const port = 3000;

const goodsRouter = require("./routers/goods");

const userRouter = require("./routes/user");
const connect = require("./schemas");
connect();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/api", [goodsRouter]);
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

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}/example`);
});
