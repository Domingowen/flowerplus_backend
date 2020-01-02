const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const NoticeSchema = new Schema({
    status: {
        type: String, // 0 notice 1 promotion 2 personal info
    },
    title: { // notice title
        type: String,
    },
    note: { // notice text
        type: String,
    },
    
});
const NoticeModel = model('NoticeModel', NoticeSchema);
module.exports = NoticeModel;
