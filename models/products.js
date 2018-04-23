const mongoose = require('../config/database')
const { schema } = mongoose

const productSchema = new Schema({
  name: { type: String, required: true},
  price: { type: Number, required: true},
  description: { type: String, required: true},
  image: { type: String, default: 'http://via.placeholder.com/500x180?text=No%20Image' },
})

module.exports = mongoose.model('products', productSchema)
