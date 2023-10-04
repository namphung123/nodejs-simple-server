const http = require('http')

const host = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  console.log('server is working')
  response.end('Server working success')
})

server.listen(port, host, (error) => {
  if (error) {
    return console.log('Error occurred:', error)
  } else {
    console.log(`Server is listening: ${host} and ${port}`)
  }
})
