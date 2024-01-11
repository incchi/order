const { Router } = require('express')
const { getAll } = require('../controller/orderItemController')

const router = Router()
router.post('/orderitems',getAll)
module.exports = router