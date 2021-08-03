const express = require('express')
const path = require('path')
const {v4} = require('uuid')
const app = express()

const CONTACTS = [
  {id: v4(), name: 'Alexander', value: '8-800-555-35-35', marked: false}
]

app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'client', 'build')))

app.get('/api/contacts', (req, res) => {
  setTimeout(() => {
    res.status(200).json(CONTACTS)
  }, 1000)
})

app.post('/api/contacts', (req, res) => {
  const contact = {...req.body, id: v4(), marked: false}
  CONTACTS.push(contact)
  res.status(201).json(contact)
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = 5000

app.listen(PORT, () => console.log(`server start on port ${PORT}...`))

