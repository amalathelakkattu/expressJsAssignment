// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the port the server will listen on
const PORT = 3000;

// Middleware to parse JSON data from the request body
app.use(express.json());

// Handle GET requests to '/'
app.get('/', (req, res) => {
    res.send('Response for GET request');
});

// Handle POST requests to '/'
app.post('/', (req, res) => {
    res.send('Response for POST request');
});

// Handle PUT requests to '/'
app.put('/', (req, res) => {
    res.send('Response for PUT request');
});

// Handle DELETE requests to '/'
app.delete('/', (req, res) => {
    res.send('Response for DELETE request');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});