const router = require('express').Router()
const { Product } = require('../models')

router.get('/products', (req, res, next) => {
  Product.find()
  .then((products) => {

    res.json(products)
  })
  .catch((error) => next(error))
  })
  .get('/products/:id', (req, res, next) => {
    const id = req.params
    Product.findById(id)
      .then((product) => {
        if (!product) { return next() }
        res.json(product)
      })
      .catch((error) => next(error))
  })
  .post('/products', (req, res, next) => {
    let newProduct = req.body
console.log("foo");
    Product.create(newProduct)
      .then((product) => res.json(product))
      .catch((error) => next(error))
  })


module.exports = router
