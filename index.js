const express = require('express')
const app = express()
const port = 3000

const goodsRouter = require('./routes/goods');
const userRouter = require('./routes/user');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'));
app.use('/goods', goodsRouter);
app.use('/user', userRouter);

app.get('/hi', (req, res) => {
    res.send('Hi. This is express router')
})

app.get('/', (req, res) => {
    res.send('Hello World! <a href="/hi">Say Hi!</a>')
})

app.get('/home', (req, res) => {
    res.render('index');
})

app.get('/detail', (req, res) => {
    res.render('detail')
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})