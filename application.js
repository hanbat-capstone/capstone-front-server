var express = require('express'),
    app = express(),
    cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname+"/public");

app.get('/',function (req,res) {
    res.render('hello123',{'name':'Swig'});
});

app.get('*', function (req, res) {
    res.send("Page not pound", 404);
});

app.listen(3002);
console.log("Express Server Started On Port 3002");
