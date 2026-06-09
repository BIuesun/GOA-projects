const http = require('node:http');

const PORT = 3202;

const data = {
    GET: 0,
    POST: 0,
    PUT: 0,
    DELETE: 0,
};

const server = http.createServer((req, res) => {
    res.end("dsdsd")
    console.log('request hit the server');
    if (req.method === 'GET') data.GET++;
    else if (req.method === 'POST') data.POST++;
    else if (req.method === 'PUT') data.PUT++;
    else if (req.method === 'DELETE') data.DELETE++;

    console.log(`${req.method} request to ${req.url}`);
    console.log('Current stats:', data);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js server!\n');
});


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});