const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getData', (req, res) => {
    res.send('Getting Data Routes !!!')
  })

  app.get('/getStore', (req, res) => {
    res.send('Getting Store Routes !!!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})