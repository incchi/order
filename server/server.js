const express = require('express')
require('./connection/initialisation')

const PORT = 400
const app = express()

app.listen(PORT,()=> console.log(PORT))