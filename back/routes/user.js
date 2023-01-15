var express = require('express');
var router = express.Router();

router.get('/login', function (req, res, next) {
    res.send('로그인 페이지')
});

router.get('/register', function (req, res, next) {
    res.send('회원가입 페이지')
});

module.exports = router;