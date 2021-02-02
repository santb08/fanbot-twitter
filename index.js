require('dotenv').config({ path: './process.template.env' });

// @packages
const Twit = require('twit');

// @scripts
const quotes = require('./quotes');

// @constants
const delayTimeInMins = 10; 
const MILIS_TO_MINS = 60 * 1000;

const twitterClient = new Twit({
    consumer_key: process.env.API_CONSUMER_KEY, 
    access_token: process.env.API_ACCESS_TOKEN,
    access_token_secret: process.env.API_TOKEN_SECRET,
    consumer_secret: process.env.API_CONSUMER_SECRET,
    strictSSL: true,
    timeout_ms: 30000 
})

const main = () => {
    const maxNumAvaliable = quotes.length - 1;
    const random = Math.round(Math.random() * maxNumAvaliable);
    console.log(quotes[random]);

    twitterClient.post('statuses/update', { status: quotes[random] }, Function.prototype);
};

setInterval(main, delayTimeInMins * MILIS_TO_MINS); 
