'use strict';
const dotenv = require('dotenv');
dotenv.config();
const ENV = process.env;
const environment = ENV.APP_ENV
const express = require('express')
var PORT, DOMAIN;
var cors = require('cors');
const app = express()
app.use(cors());

app.get('/bot', (req, res) => {

    let message = "Welcome to the bot!"
    message += "\n\n";
    message += "Đang trong quá trình phát triển";
    res.json(message);
});

if (environment == 'local') {
    PORT = process.env.PORT_LOCAL;
    DOMAIN = process.env.URL_LOCAL;
} else if (environment == 'production') {
    PORT = process.env.PORT_SERVER;
    DOMAIN = process.env.URL_SERVER;
}
app.listen(PORT);
console.log(`Run : ${DOMAIN}:${PORT}`);