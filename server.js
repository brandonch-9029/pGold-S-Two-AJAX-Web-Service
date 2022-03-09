const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const port = 3000
const path = require('path')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/submit', (req, res) => {
  let userData = JSON.stringify(req.body)
  fs.appendFileSync('responses.txt', userData + '\n')
  console.log(userData + ' logged successfully')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

app.use('/static', express.static(path.join(__dirname, 'files')))
