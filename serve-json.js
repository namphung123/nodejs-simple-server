const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })

  let json_response = {
    status: 200,
    message: 'successful',
    result: ['sunday', 'monday', 'tuesday', 'wednesday'],
    code: 2000,
  }
  console.log('server is running')
  res.write(JSON.stringify(json_response))
  res.end()
})

server.listen(3000)
