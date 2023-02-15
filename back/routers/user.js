const express = require("express");
const User = require("../schemas/user");
const router = express.Router();
const Joi = require("joi");

const signupSchema = Joi.object({
    email: Joi.string().pattern(new RegExp(
        "^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\\.[a-zA-Z]{2,6}$")).required(),
    nickname: Joi.string().required(),
    password: Joi.string().pattern(new RegExp(
        "^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$")).required(),
    confirmPassword: Joi.string().pattern(new RegExp(
        "^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$")).required()
})

// 회원가입 API
router.post("/users", async (req, res) => {
    try {
        const { email, nickname, password, confirmPassword } = await signupSchema.validateAsync(req.body);


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
        res.status(201).send("success");
    } catch (error) {
        console.log(error);
        const errorMessage = error.details.map(detail => detail.message).join(',');
        if (errorMessage.includes("email"))
            res.status(400).send("이메일을 형식에 맞게 입력하세요.");
        else if (errorMessage.includes("nickname"))
            res.status(400).send("닉네임을 형식에 맞게 입력하세요.");
        else if (errorMessage.includes("password"))
            res.status(400).send("비밀번호를 형식에 맞게 입력하세요.");
        else
            res.status(400).send(error);
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