const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  path = require('path') // add path module,
  mysql = require('mysql');

const app = express();


// setup database
db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'watersupply'
  })


// make server object that contain port property and the value for our server.
var server = {
  port: 4040
};


// routers
const usersRouter = require('./routes/customers');
// use the modules
app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
// use router
app.use('/customers', usersRouter);
// router user input
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname) + '/input.html');
});




// starting the server
app.listen( server.port , () => console.log(`Server started, listening on port: ${server.port}`));







