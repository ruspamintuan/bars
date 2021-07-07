const express = require('express')
const billingRouter = require('./routers/router')
require('./db/mongoose')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(billingRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})