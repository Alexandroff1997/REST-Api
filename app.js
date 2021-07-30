const express = require('express')
const app = express()

const PORT = 5000

app.listen(PORT, () => `server is started on port ${PORT}`)