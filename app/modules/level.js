const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const LevelSchema = new Schema({
    
});
const LevelModel = model('LevelModel', LevelSchema);
module.exports = LevelModel;
