/* 
    user address
*/

const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const AddressSchema = new Schema(
    {
        name: {
            // 收货人
            type: String
        },
        phone: {
            // 电话号码
            type: String
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "UserModel"
        },
        // province: {
        //     type: String
        // },
        // city: {
        //     type: String
        // },
        // district: {
        //     type: String
        // },
        detail: {
            type: String
        },
        default: {
            type: Boolean,
            default: false
        },
        areaCode: {
            type: Array
        },
        address: {
            type: Array
        }
    },
    {
        timestamps: true
    }
);
const AddressModel = model("AddressModel", AddressSchema);
module.exports = AddressModel;
