/*
    mongodb connection
*/

const mongoose = require("mongoose");
const mongoDBPromise = new Promise((resolve, reject) => {
    mongoose.connect("mongodb://flower:flower123456@35.247.135.164/flowerplus?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on("error", function(err) {
        reject(`mongodb has error${err}`);
    });
    db.once("open", function() {
        resolve("mongodb connection");
        // we're connected!
    });
});
module.exports = mongoDBPromise;
