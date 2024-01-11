const orderItemModel = require("../model/orderItemModel");
const orderModel = require("../model/orderModel");

const orderItemController = {
    getAll: async (req, res) => {
        try {
            const { orderid, productname, quantity, price } = req.body;
            
            const orderDB = await orderModel.findOne({ orderID: orderid });
            console.log(orderDB);
            if(orderDB){
                await orderItemModel.create({
                    orderID: orderid,
                    productName: productname,
                    quantity: quantity,
                    price: price
                })
                res.status(200).send({message: "order will be delivered soon"})    
            }else{
                
                res.status(201).send({message: "place an order first"})
            }

        } catch (error) {
            res.status(500).send({message: error})
        }
    }
}


module.exports = {...orderItemController};