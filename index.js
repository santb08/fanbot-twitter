const twit = require('twit');
const quotes = require('./quotes');
const delayTimeInMins = 5; 
const MILIS_TO_MINS = 3600;

const main = () => {
    const maxNumAvaliable = quotes.length - 1;
    const random = Math.round(Math.random() * maxNumAvaliable);
    console.log(quotes[random]);
};

main();
setInterval(main, delayTimeInMins * MILIS_TO_MINS); 
