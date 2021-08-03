const express = require('express')
const path = require('path')
const app = express()

const CONTACTS = [
  {id: 1, name: 'Alexander', value: '8-800-555-35-35', marked: false}
]

app.use('/', express.static(path.join(__dirname, 'client', 'build')))

app.get('/api/contacts', (req, res) => {
  res.status(200).json(CONTACTS)
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = 5000

app.listen(PORT, () => console.log(`server start on port ${PORT}...`))

