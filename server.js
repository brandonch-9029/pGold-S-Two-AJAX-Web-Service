const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const path = require('path')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/submit', (req, res) => {
  console.log(req.body)
  console.log('received post successfully')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/static', express.static(path.join(__dirname, 'files')))
