const request = require('superagent')
const products = require('./fixtures/products.json')

const createUrl = (path) => {
  return `${process.env.HOST || `http:localhost:${process.end.PORT || 3030}`}${path}`
}
