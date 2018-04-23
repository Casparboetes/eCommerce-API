const mongoose = require('mongoose')

// Use native promises
mongoose.Promise = global.Promise

//Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/eCommerce'
mongoose.set('dbug, true')
mongoose.connect(MONGODB_URI)

// Monitor DB connection
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB!')
})

module.exports = mongoose
