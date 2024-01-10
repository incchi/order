const mongoose = require('mongoose')

mongoose
    .connect('http://localhost:27017/ecommerce')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err))
