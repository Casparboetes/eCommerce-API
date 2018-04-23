const express = require('express')

const PORT = process.env.PORT || 3030

let app = express()

app.get('/', (req, res) => {
  res.send('Hello from expess')
})

app.listen(PORT, () => {
  console.log(`Welcome to the eCommerce server on port ${PORT}`)
})
