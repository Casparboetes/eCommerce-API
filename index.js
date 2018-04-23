const express = require('express')
const { Product } = require('./models')

const PORT = process.env.PORT || 3030

let app = express()

app.get('/products', (req, res, next) => {
  Product.find()
  .sort({ createdAt: -1})
  .then((products) => res.json(products))
  .catch((error) => next(error))
})

app.listen(PORT, () => {
  console.log(`Welcome to the eCommerce server on port ${PORT}`)
})
