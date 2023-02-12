const jwt = require("jsonwebtoken");
const User = require("../schemas/user");

module.exports = (req, res, next) => {
    const authToken = req.headers;

    if (authToken === undefined) {
        res.status(401).send({
            errorMessage: "로그인 후 이용 가능한 기능입니다.",
        });
        return;
    }

    try {
        const { nickname } = jwt.verify(authToken, process.env.JWT_TOKEN);
        User.findById(nickname).then((user) => {
            res.locals.user = user;
            next();
        });
    } catch (err) {
        res.status(401).send({
            errorMessage: "로그인 후 이용 가능한 기능입니다.",
        });
    }
};