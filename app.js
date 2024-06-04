//We can pick any one or two get and post request and response object to demonstrate the usage

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route demonstrating req.query
app.get('/query', (req, res) => {
  const queryParams = req.query;
  res.send(`Query parameters received: ${JSON.stringify(queryParams)}`);
});

// Route demonstrating req.params
app.get('/params/:name/:age', (req, res) => {
  const name = req.params.name;
  const age = req.params.age;
  res.send(`Route parameters received: Name - ${name}, Age - ${age}`);
});

// Route demonstrating req.body
app.post('/body', (req, res) => {
  const body = req.body;
  res.send(`Request body received: ${JSON.stringify(body)}`);
});

// Route demonstrating req.headers
app.get('/headers', (req, res) => {
  const headers = req.headers;
  res.send(`Request headers received: ${JSON.stringify(headers)}`);
});

// Route demonstrating res.json
app.get('/json', (req, res) => {
  res.json({ message: 'This is a JSON response' });
});

// Route demonstrating res.status and res.send
app.get('/status', (req, res) => {
  res.status(201).send('Resource created');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
