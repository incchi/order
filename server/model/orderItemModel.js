const mongoose = require("mongoose")

const orderItemSchema = new mongoose.Schema(
    {
        orderID : {
            type : mongoose.SchemaTypes.ObjectId,
            required : true,
            ref : "orderModel"
        },
        productName : {
            type : Object,
            required : true
        },
        quantity : {
            type : Number,
        },
        price : {   e : Number,
        }
    }
)

module.exports = mongoose.model("orderItemModel",orderItemSchema)