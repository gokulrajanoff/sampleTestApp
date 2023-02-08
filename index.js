const express = require('express')
const app = express()
const https = require('https')
const http = require('http')
app.use(express.static('public'))

app.get('/test', (req, res) => {
  res.send('Hello World!')
})
const devport = 8080
app.listen(devport, () => {
  console.log(`Example app listening on port ${devport}`)
})

http.createServer(app).listen(80)
https.createServer({}, app).listen(443)
