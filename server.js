var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

//counter
var counter = 0;
app.get('/counter', function (req, res){
    counter = counter + 1;
    res.send(counter.toString());
});
app.get('/balaji' , function (req,res){
    res.send("served here");
});

var articles = {
    'article-one' : {
    title: 'Article One | balaji',
    date: 'March 11,2016',
    content: `<p>This is my first article i like to travel</p>
        <p>I like coding</p>`},

    'article-two' : {
    title: 'Article two | balaji',
    date: 'March 11,2016',
    content: `<p>This is my second article i like to travel</p>
        <p>I like coding</p>`},
        
    'article-three' : {
    title: 'Article Three | balaji',
    date: 'March 11,2016',
    content: `<p>This is my third article i like to travel</p>
        <p>I like coding</p>`}
    };
    
function createTemplate(data)
{
    var title = data.title;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = 
    `<html>
        <head><title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link href="/ui/style.css" rel="stylesheet" />
        </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a><hr>
                
            </div>
            <h3>${title}</h3>
            <div>${date}</div>
            <div>${content}
            </div>
        </div>
    </body>
    </html>`
    return htmlTemplate
    }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
