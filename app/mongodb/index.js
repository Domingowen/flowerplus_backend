/*
    mongodb connection
*/

const mongoose = require("mongoose");
const mongoDBPromise = new Promise((resolve, reject) => {
    mongoose.connect("mongodb+srv://rental:WGCnuli6421580@cluster0-nnx4p.mongodb.net/rental?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
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
