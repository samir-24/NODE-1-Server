const http = require('http')

const port = 8000;

const requestHandler = (req, res) => {

    console.log(req.url);

    const fs = require('fs');

    const path = require('path');

    let fileName = "";

    switch (req.url) {

        case '/':
            fileName = './pages/index.html';
            break;

        case '/about':
            fileName = './pages/about.html';
            break;

        case '/contact':
            fileName = './pages/contact.html';
            break;

        case '/service':
            fileName = './pages/service.html';
            break;

        default:
            fileName = './pages/404-page.html'
            break;

    }

    fs.readFile(path.join(__dirname, fileName),
    
        (err, data) => {

        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' },
                res.end("Internal Server ERROR...")
            )
        }

        else {
            res.writeHead(200, { 'Content-Type': 'text/html' }),
                res.end(data)
        }
    })


}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    else {
        console.log(`Server Start On Port ${port}`);
        console.log('http://localhost:8000/')
    }
})
