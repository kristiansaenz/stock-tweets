const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('ho!'))

axios.get('https://api.stocktwits.com/api/2/streams/symbol/AAPL.json?limit=3')
    .then(response => {
        console.log(response.data.status);
        // console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });

console.log ('listening')

app.listen(8080)