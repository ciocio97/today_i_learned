// const http = require('http');

// const PORT = 5000;

// const ip = 'localhost';

// const server = http.createServer((request, response) => {
//   console.log(
//     `http request method is ${request.method}, url is ${request.url}`
//   );
//   response.writeHead(200, defaultCorsHeader);
//   response.end('hello mini-server sprints');
// });

// server.listen(PORT, ip, () => {
//   console.log(`http server listen on ${ip}:${PORT}`);
// });

// const defaultCorsHeader = {
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'Content-Type, Accept',
//   'Access-Control-Max-Age': 10
// };

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};

const express = require('express');
const cors = require('cors');

const app = express();

const port = 5000;

// app.use(express.json());
app.use(express.json({strict:false}));

app.options('/lower', cors(defaultCorsHeader));
app.post('/lower', cors(), function(req, res, next){
  console.log(req.body);
  res.json(req.body.toLowerCase());
})

app.options('/upper', cors(defaultCorsHeader));
app.post('/upper', cors(), function(req, res, next){
  res.json(req.body.toUpperCase());
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

