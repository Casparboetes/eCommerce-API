const express = require('express')
const bodyParser = require('body-parser')
const { products } = require('./routes')
const { Product } = require('./models')

const PORT = process.env.PORT || 3030

let app = express()

app
  .use(bodyParser.urlencoded({ extended: true}))
  .use(bodyParser.json())

// routes
  .use(products)

// catch 404 & forward to error handler
  .use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })

// final error handler
.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  })
})

.listen(PORT, () => {
  console.log(`Welcome to the eCommerce server on port ${PORT}`)
})
