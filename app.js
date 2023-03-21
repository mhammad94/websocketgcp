
'use strict';
const app = require('express')();
app.set('view engine', 'pug');

const server = require('http').Server(app);
const io = require('socket.io')(server);
const ysocketioRef = require('y-socket.io/dist/server');
const ySocketIO = new ysocketioRef.YSocketIO(io);
ySocketIO.initialize();

app.get('/', (req, res) => {
  res.send("Server is up");
});

if (module === require.main) {
  const PORT = parseInt(process.env.PORT) || 8080;
  server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
  });
}
module.exports = server;
