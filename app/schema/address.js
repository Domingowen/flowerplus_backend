/* 
    user address
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const AddressSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    
});
const AddressModel = model('AddressModel', AddressSchema);
module.exports = AddressModel;


