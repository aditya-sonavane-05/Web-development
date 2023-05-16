const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Example table</title>
        </head>
        <body>
          <h1>Example table</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>30</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>25</td>
                <td>jane@example.com</td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
