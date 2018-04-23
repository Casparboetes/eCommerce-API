const express = require('express')
const bodyParser = require('body-parser')
const { Product } = require('./models')

const PORT = process.env.PORT || 3030

let app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/products', (req, res, next) => {
  Product.find()
  .sort({ createdAt: -1})
  .then((products) => res.json(products))
  .catch((error) => next(error))
})

app.get('/produtcs/:id', (req, res, next) => {

  const id = req.params

  Product.findById(id)
    .then((product) => {
      if (!product) { return next() }
      res.json(product)
    })
    .catch((error) => next(error))
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  })
})

app.listen(PORT, () => {
  console.log(`Welcome to the eCommerce server on port ${PORT}`)
})
