// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 9990; // Choose any port you prefer

// Enable CORS for all origins (for development purposes)
app.use(cors());

// Define your todo items (sample data)
const todos = [
  { id: 1, title: 'Complete homework', description: 'Finish math assignment' },
  { id: 2, title: 'Buy groceries', description: 'Milk, eggs, bread' },
  { id: 3, title: 'Exercise', description: 'Go for a run in the park' },
];

// Define a route to fetch todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Define a route to fetch a todo by ID
app.get('/todos/:id', (req, res) => {
  const { id } = req.params;
  const todo = todos.find(todo => todo.id === parseInt(id));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
