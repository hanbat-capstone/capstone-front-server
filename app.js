const express = require('express'),
    app = express(),
    cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname+"/public/manager/");
// app.set('views', __dirname+"/public");

app.use('/', express.static(__dirname+'/public/manager/'));
app.use('/', express.static(__dirname+'/public/introduce'));

app.get('/hello', function (req, res) {
    res.render('hello',{'name':'Swig'});
});

app.get('/introduce', function(req,res){
    // res.render('index');
    res.sendFile((__dirname+'/public/introduce/index.html'));
});

app.get('/main', function(req,res){
    // res.render('main');
   res.sendFile((__dirname+'/public/manager/main.html'));
});

app.get('/memberList', function(req,res){
    // res.render('memberList');
    res.sendFile((__dirname+'/public/manager/memberList.html'));
});

app.get('/panelList', function(req,res){
    // res.render('panelList');
    res.sendFile((__dirname+'/public/manager/panelList.html'));
});

app.get('/damageList', function(req,res){
    // res.render('damageList');
    res.sendFile((__dirname+'/public/manager/damageList.html'));
});

app.get('/addMember', function(req,res){
    // res.render('addMember');
    res.sendFile((__dirname+'/public/manager/addMember.html'));
});

app.get('/addPanel', function(req,res){
    // res.render('addPanel');
    res.sendFile((__dirname+'/public/manager/addPanel.html'));
});

app.get('/updateMember', function(req,res){
    //res.render('updateMember');
    res.sendFile((__dirname+'/public/manager/updateMember.html'));
});

app.get('/updatePanel', function(req,res){
    // res.render('updatePanel');
    res.sendFile((__dirname+'/public/manager/updatePanel.html'));
});

app.get('/collectionChart', function(req,res){
    // res.render('collectionChart');
    res.sendFile((__dirname+'/public/manager/collectionChart1.html'));
});

app.get('/collectionChart/:id', function(req,res){
    res.render('collectionChart',{'name':req.params.id});
});

app.get('/historyChart/:id', function(req,res){
    res.render('historyChart',{'name':req.params.id});
});

app.get('/historyChart', function(req,res){
    res.render('historyChart');
    // res.sendFile((__dirname+'/public/historyChart.html'));
});

app.listen(3000, function(){
   console.log('http://127.0.0.1:3000 app listening on port 3000!');
});