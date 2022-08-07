import express from 'express';
import mongoose from 'mongoose';
import cards from './dbCards.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://Amith:Amith123@cluster0.all4ehi.mongodb.net/?retryWrites=true&w=majority';

app.use(express.urlencoded({ extended: false }));
app.use(cors());  

mongoose.connect(connection_url, (error, client) => {
    if (error) {
        console.log('error : ', error);
    } else {
        console.log('database connected')
    }
});

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.get('/login', (req, res) => {
    res.render('login.ejs')
});

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
});

app.get('/tinder/cards', (req, res) => {
    cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

app.get('*', function (req, res) {
    res.writeHead(404, { 'Content-type': 'text/html' })
    res.write(`<div style="display:flex;justify-content: center;height: 100%;align-items: center;">
    <h2>Sorry, this is an invalid URL</h2>
    </div>`)
    res.end();
});

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});