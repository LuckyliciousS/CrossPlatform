const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Another one! 33333333333')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
