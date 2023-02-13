const jwt = require("jsonwebtoken");
const User = require("../schemas/user");

module.exports = (req, res, next) => {
    const { token } = req.headers;


    if (token === undefined) {
        res.status(401).send("로그인 후 이용 가능한 기능입니다.");
        return;
    }

    try {
        const { nickname } = jwt.verify(token, process.env.JWT_TOKEN);
        User.findOne({ nickname }).then((user) => {
            res.locals.user = user;
            next();
        });
    } catch (err) {
        console.log("에러 출력: ", err);
        res.status(401).send({ reponseMessage: "로그인 후 이용 가능한 기능입니다.", errormessage: err });
    }
};