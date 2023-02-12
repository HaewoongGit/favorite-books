const express = require("express");
const User = require("../schemas/user");
const router = express.Router();

// 회원가입 API
router.post("/users", async (req, res) => {
    try {
        const { email, nickname, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            res.status(400).send({
                errorMessage: "패스워드가 패스워드 확인란과 다릅니다.",
            });
            return;
        }

        // email or nickname 확인
        const existsUsers = await User.findOne({
            $or: [{ email }, { nickname }],
        });
        if (existsUsers) {
            res.status(406).send("이메일 또는 닉네임이 이미 사용중입니다.");
            return;
        }

        await User.create({ email, nickname, password })
        res.status(201).send("회원가입 성공");
    } catch (err) {
        res.status(400).send(err);
    }

});

// login API
const jwt = require("jsonwebtoken");

router.post("/auth", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || password !== user.password) {
        res.status(400).send("이메일 또는 패스워드가 틀렸습니다.");
        return;
    }

    res.status(200).send({
        token: jwt.sign({ nickname: user.nickname }, process.env.JWT_TOKEN),
    });
});


module.exports = router