const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {
        orderID : {
            type : String,
            required : true,
            unique : true
        },
        payment : {
            type : Boolean,
            required : true
        },
        totalPrice :{
            type : Number
        },
        shippingAddress : {
            streetAddress : String,
            city : String,
            zipcode : Number,
            state : String,
        },
        placedAt : {
            type : mongoose.SchemaTypes.Date,
            default : new Date().toTimeString()
        }
    }
)


module.exports = mongoose.model("orderModel",orderSchema)