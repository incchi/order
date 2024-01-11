const {Router} = require('express');
const { placeOrder, getOrderDetails, getOrderItemList } = require('../controller/orderController');

const router = Router();

router.post('/placeorder', placeOrder);
router.get('/getorderdetails', getOrderDetails),
router.get('/getorderlist',getOrderItemList)

module.exports = router;