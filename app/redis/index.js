/* 
    redis initilize and create connect
*/

const redis = require('redis');
const client = redis.createClient({
    host: '127.0.0.1',
});
client.on('error', (err) => {
    console.log(err, 'err');
});
client.on('connect', () => {
    console.log('redis is connect');
})
client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.get('string key', (err, replies) => {
    console.log(replies);
})
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    // client.quit();
});

module.exports = client;
