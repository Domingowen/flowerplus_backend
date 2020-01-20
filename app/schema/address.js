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
    province: {
        type: String,
    },
    city:{
        type: String,
    },
    district: {
        type: String,
    },
    detail: {
        type: String,
    },
    default: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});
const AddressModel = model('AddressModel', AddressSchema);
module.exports = AddressModel;


