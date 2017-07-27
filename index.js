const express = require('express')
const app = express()
const port = process.env.PORT || 8181
const path = require('path')

app.use((req, res, next) => {
  console.log(`Retrieving '${req.originalUrl}'...`)
  next()
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public', 'html', 'index.html'))
})

app.get('*', (req, res) => {
  res.send('Error: 404. Resource not found')
})

app.listen(port, () => {
  console.log(`The app is now listening on port ${port}.`)
})
