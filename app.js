const express = require('express')
const app = express()

const CONTACTS = [
  {id: 1, name: 'Alexander', value: '8-800-555-35-35', marked: false}
]

const PORT = 5000

app.get('*', (req, res) => {
  res.status(200)
})

app.listen(PORT, () => `server is started on port ${PORT}`)