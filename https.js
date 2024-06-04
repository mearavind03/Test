const http = require('http');

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Route handling
  if (req.url === '/') {
    res.write('Hello, World!');
  } else if (req.url === '/about') {
    res.write('About Us Page');
  } else if (req.url === '/contact') {
    res.write('Contact Us Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
  }
  res.end();
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
