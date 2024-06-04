const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// GET method to retrieve all users
app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  user = users.find(u => (u.id === userId))
  res.send(user);
});

// POST method to create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send('User created successfully');
});

// PUT method to update an existing user
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  users = users.map(user => (user.id === userId ? updatedUser : user));
  res.send('User updated successfully');
});

// DELETE method to delete an existing user
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  res.send('User deleted successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});