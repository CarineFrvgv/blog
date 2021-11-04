const express = require('express');
const ejs = require('ejs');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/post', (req, res) => {
    res.render('post');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})