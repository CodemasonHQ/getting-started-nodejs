var express = require('express');
var app = express();

var PORT = (process.env.PORT || 3000);

var QUOTES = [
    "Build something amazing.",
    "Crank out some code.",
    "We think you're pretty great",
    "Deploy love. Launch happiness.",
    "You know what to do 👍",
    "Build something you will be proud of.",
    "Code more. Manage servers less.",
    "Build something people use.",
    "You are a modern day wizard.",
    "Are you a lion or a sheep?",
    "Start a passion project, turn it into a business.",
    "Will you build something awesome today?",
    "Deploy better. Scale faster. Automate awesomely.",
    "Scale to infinity and beyond!",
    "Crank code, not configs.",
    "Dream, then do.",
    "Enjoy the little things.",
    "The power of imagination is infinite",
    "If you don't make mistakes, <br>you aren't making anything.",
    "Empathy is key."
];

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', { 
        quote: QUOTES[Math.floor(Math.random()*QUOTES.length)]
    });
})

app.listen(PORT, function () {
    console.log('Your app listening on port %s!', PORT);
})
