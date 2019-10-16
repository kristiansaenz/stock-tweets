const express = require('express');
const cors = require('cors');
const request = require('request');
const app = express();

app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/', (req, res) => {
console.log(req.query.id);
const url = 'https://api.stocktwits.com/api/2/streams/symbol/'+ req.query.id + '.json?limit=30';
request(
    { url: url },
    (error, response, body) => {
    if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: "it dont werk" });
    }
    res.json(JSON.parse(body));
    }
)
});

console.log ('listening for stocks ~')

app.listen(8080)