var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path') ;
var bodyParser = require('body-parser');
var request = require('request');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../public')));

http.listen(3000);


io.on('connection', function(socket){
    
    socket.emit('send', function(data) {
        console.log('Data desde el servidor: '+data);
    });
    
    socket.emit('weyler', function(data) {
        console.log('Data de weyler:' + data)
    });
});

app.post('/api', (req,res) =>{
    let speed = req.body.speed;
    let speedWeyler = 100;
    io.sockets.emit('send', speed);
    io.sockets.emit('weyler', speedWeyler);

    res.end();
})