const express = require('express');
const path = require('path');

async function start() {
    try {
        const server = express()
            .use(express.static(path.join(__dirname, 'client/build')))
            .get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/build', 'index.html')))
            .listen(PORT, () => console.log(`Listening on ${PORT} Start http://localhost:5000/home/`));

        const io = require('socket.io').listen(server);

        io.on('connection', socket => {
            // This is new connection
        })
    } catch (e) {
        console.log("Server Error", e.massage);
        process.exit(1);
    }
}

start();