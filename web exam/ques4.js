const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Example form</title>
        </head>
        <body>
          <h1>Example form</h1>
          <form method="POST" action="/">
            <label for="name">Name:</label>
            <input type="text" name="name"><br>
            <label for="email">Email:</label>
            <input type="email" name="email"><br>
            <input type="submit" value="Submit">
          </form>
        </body>
      </html>
    `);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
