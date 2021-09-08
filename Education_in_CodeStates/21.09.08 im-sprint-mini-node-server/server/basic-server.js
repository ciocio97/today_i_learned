const http = require('http');

const PORT = 5000;

const ip = 'localhost';

const server = http.createServer((request, response) => {

  const {headers, method, url} = request;

  let body = [];
  console.log(request);
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body);
    // console.log(method);
    // console.log(url);

    if(method === 'OPTIONS'){
      response.writeHead(200, defaultCorsHeader);
      response.end();
    }
  
    if(method === 'POST' && url === '/upper'){
      response.writeHead(200, defaultCorsHeader);
      body = body.toUpperCase();
      response.write(body);
    }
    else if(method === 'POST' && url === '/lower'){
      response.writeHead(200, defaultCorsHeader);
      body = body.toLowerCase();
      response.write(body);
    }
    else{
      response.statusCode = 404;
      response.end();
    }

    response.end();
  })

  response.on('error', (err) => {
    console.error(err);
  });

  // const { headers, method, url } = request;

  // let body = [];
  // request.on('error', (err) => {
  //   console.error(err);
  // }).on('data', (chunk) => {
  //   body.push(chunk);
  // }).on('end', () => {

  //   if(method === 'OPTION', url === '/upper'){
  //     body = Buffer.concat(body).toString().toUpperCase();
  //   }
  //   else if(method === 'OPTION', url === '/lower'){
  //     body = Buffer.concat(body).toString().toLowerCase();
  //   }

  //   response.on('error', (err) => {
  //     console.error(err);
  //   });

  //   response.writeHead(200, defaultCorsHeader);
  //   response.write(body);
  //   response.end();
  // });
  
  // console.log(
  //   `http request method is ${request.method}, url is ${request.url}`
  // );

});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};