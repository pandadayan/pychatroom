const webSocket = require('ws');

const server = new webSocket.Server({
    port: 5000,
    host: '10.31.162.48'
});

let users = {};

let count = 0;

server.on('connection', client => {

    client.id = ++count;

    users[client.id] = client;

    client.on('message', msg => {
        msg = JSON.parse(msg);
        client.username = msg.username;
        console.log(msg);
        console.log(`${client.username}说:${msg.msg}`);
        boardCaster(msg, client);
    });

    client.on('close', () => {
        console.log(`用户${client.id}下线了`);
        delete users[client.id];
    });

});

function boardCaster(msg, client) {
    for (var key in users) {
        users[key].send(`${JSON.stringify(msg)}`);
    }
}