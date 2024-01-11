const express = require('express')
require('./connection/initialisation')
const orderRouter = require('./routes/orderRouter')
const orderItemRouter = require('./routes/orderItemRouter')
const PORT = 400
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',orderRouter)
app.use('/api',orderItemRouter)
app.listen(PORT,()=> console.log(PORT))