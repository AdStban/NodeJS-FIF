var redis = require('redis');
let client = redis.createClient(); //creates a new client

client.on('connect', function() {
    console.log('connected');
});

//client.close();
module.exports = client;