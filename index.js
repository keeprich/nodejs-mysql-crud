const express = require('express');

 // create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
 
// parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes')
// using as middleware
app.use('/api/v1/employees', employeeRoutes)



// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port} @ localhost:5000`);
});