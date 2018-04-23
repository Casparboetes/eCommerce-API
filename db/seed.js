const request = require('superagent')
const products = require('./fixtures/products.json')

const createUrl = (path) => {
  return `${process.env.HOST || `http://localhost:${process.env.PORT || 3030}`}${path}`
}
//
// const createProducts = () => {
//   return products.map((product) => {
//     return request
//       .post(createUrl('/products'))
//       .send(product)
//       .then((res) => {
//         console.log('Product seeded...', res.body.name)
//       })
//       .catch((err) => {
//         console.error('Error seeding product!', err)
//       })
//   })
// }

products.map((product) => {
  return request
    .post(createUrl('/products'))
    .send(product)
    .then((res) => {
      console.log('Product seeded...', res.body.name)
    })
    .catch((err) => {
      console.error('Error seeding product!', err)
    })
})
