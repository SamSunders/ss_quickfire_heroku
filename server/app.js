var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/views/index.html"));
    //res.sendFile(path.join(__dirname, "./public/assets/scripts/styles.css"));
});

app.listen(app.get('port'), function(){
    console.log("Listening on port: " + app.get('port'));
});