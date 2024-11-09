const express = require('express');
const bodyParser = require('body-parser');
const factorialRoutes = require('./routes/assignmentNo3_routes');
const app = express();


app.use(bodyParser.json());


app.use('/api', factorialRoutes);


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
