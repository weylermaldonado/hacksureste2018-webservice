var socket = io();

socket.on('send', function(data){
    console.log('Data desde el cliente:' + data);
});

socket.on('weyler', function(data){
    console.log('Data de weyler'+data);
});

