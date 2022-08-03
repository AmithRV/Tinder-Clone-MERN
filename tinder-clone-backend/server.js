import express from 'express';
import mongoose from 'mongoose';
import cards from './dbCards.js';
import fs from 'fs';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://Amith:Amith123@cluster0.all4ehi.mongodb.net/?retryWrites=true&w=majority';

app.use(express.urlencoded());
app.use(cors());  

mongoose.connect(connection_url, (error, client) => {
    if (error) {
        console.log('error : ', error);
    } else {
        console.log('database connected')
    }
});

app.get('/', (req, res) => {
    res.status(200).send("hello")
});

app.get('/tinder/create-card', (req, res) => {
    fs.readFile('index.html', (error, data) => {
        if (data) {
            res.writeHead(200, { 'Content-type': 'text' })
            res.write(data);
            res.end();
        } else if (error) {
            res.write('Error');
            res.end();
        }
    })
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

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});