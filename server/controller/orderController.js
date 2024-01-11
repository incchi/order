const orderModel = require("../model/orderModel");

const orderController = {
    placeOrder : async (req, res) => {
        try{
            const {orderid , payment , totalprice, shippingaddress, placedat} = req.body;
            const userDB = await orderModel.create({
                orderID: orderid,
                payment: payment,
                totalPrice: totalprice,
                shippingAddress: shippingaddress,
                placedAt: placedat

            })
            userDB.save();
            res.status(201).send({message: "Order Placed Successfully"})
        }catch(err){
            console.log(err);
            res.status(500).send({message: "Internal Server Error"})
        }
    },

    getOrderDetails : async(req,res)=>{
        try{
            const {orderid} = req.body;
            const orderDB = await orderModel.findOne({orderID: orderid});
            if(orderDB){
                res.status(200).send({message: orderDB})
            }else{
                res.status(404).send({message: "Order not found"})
            }
        }catch(err){
            console.log(err);
            res.status(500).send({message: "Internal Server Error"})
        }
    },

    getOrderItemList : async(req,res)=>{
        const list =await orderModel.aggregate([
            {$match : {orderID : req.body.orderid}},
            {$project : { _id: 0 }},
            {$lookup : {
                from : "orderitemmodels",
                localField : "orderID",
                foreignField : "orderID",
                as : "orderItemsList"
            }}
        ])
        .then((data)=>{
            res.status(200).send(data)
        })
        .catch((err)=>{
            res.status(500).send({message: err})
        })
    }
}


module.exports = {...orderController};