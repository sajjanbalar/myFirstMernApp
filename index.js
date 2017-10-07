var express = require('express')
var app = express()
var path = require('path')
var mongodb = require('mongodb')
app.use(express.static('.'))
app.use(express.static('.'))
app.listen(3000, function(){
	console.log("server started")	
})
app.get('/',function(req , res){
	res.sendFile(path.join(__dirname, 'index.html')); 
})
app.get('/dataFromDB', function(req, res){
      mongoURL = 'mongodb://test:test@ds111565.mlab.com:11565/example';
      mongodb.connect(mongoURL, function(err, db) {
        var collection = db.collection('text');
        collection.find({}).next(function(err, doc) {
          res.json(doc);
          db.close();
        });
      });
}) 