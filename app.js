const express = require('express');
const bodyParser = require('body-parser');
const factorialRoutes = require('./routes/assignmentNo3_routes');
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use the factorial routes
app.use('/api', factorialRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
