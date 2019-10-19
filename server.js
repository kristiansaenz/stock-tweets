const express = require('express');
const cors = require('cors');
const request = require('request');
const path = require('path');
const app = express();

const port = process.env.port || 8080;

app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/tweets', (req, res) => {
    const url = `https://api.stocktwits.com/api/2/streams/symbol/${req.query.id}.json?limit=30`;
    request(
        { url: url },
        (error, response, body) => {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: "it dont werk" });
        }
        res.json(JSON.parse(body));
        })
});

app.listen(port, () => console.log (`listening for stocks on port ${port}`));