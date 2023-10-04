const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/pdf' })

  fs.readFile('index.pdf', (err, data) => {
    if (err) {
      throw err
    } else {
      res.write(data)
      res.end()
    }
  })
})

server.listen(3000)
