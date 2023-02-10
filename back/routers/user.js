const express = require("express");
const User = require("./models/user");
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
            res.status(400).send({
                errorMessage: "이메일 또는 닉네임이 이미 사용중입니다.",
            });
            return;
        }

        const user = new User({ email, nickname, password });
        await user.save();

        res.status(201);
    } catch (err) {
        res.send(err);
    }

});

module.exports = router