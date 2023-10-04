const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log('server is running port: 3000')
  res.writeHead(200, { 'Content-Type': 'audio/mp3' })
  fs.readFile('audio.mp3', (err, data) => {
    if (err) {
      throw err
    } else {
      res.write(data)
      res.end()
    }
  })
  //   fs.existsSync('audio.mp3', (exist) => {
  //     if (exist) {
  //       const rstream = fs.createReadStream('audio.mp3')
  //       rstream.pipe(res)
  //     } else {
  //       res.end("It's a 404")
  //     }
  //   })
})

server.listen(3000)
