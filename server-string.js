const http = require('http')

const host = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.write('Hello world with nodejs')
  response.end()
})

server.listen(port, host, (error) => {
  if (error) {
    console.log(`Error:`, error)
  } else {
    console.log(`Server is listening in ${host} and ${port} `)
  }
})
