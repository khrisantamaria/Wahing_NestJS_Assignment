
const express = require('express');
const app = express();
const routes = require('./routes/assignmentNo1_routes');


app.use(express.json());


app.use('/api', routes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
