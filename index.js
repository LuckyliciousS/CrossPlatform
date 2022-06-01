const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('The NodeJS Server is running and is never gonna give you up')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
