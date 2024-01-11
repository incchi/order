const mongoose = require("mongoose")

const orderItemSchema = new mongoose.Schema(
    {
        orderID : {
            type : String,
            required : true,
            
        },
        productName : {
            type : String,
            required : true
        },
        quantity : {
            type : Number,
        },
        price : {   
            type : Number,
        }
    }
)

module.exports = mongoose.model("orderItemModel",orderItemSchema)