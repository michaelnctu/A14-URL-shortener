const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

// start and listen on the Express server
app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})