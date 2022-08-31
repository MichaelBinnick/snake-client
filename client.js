const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541,
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  })

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    conn.write('Name: MTB');
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 50);
    // setTimeout(() => {
    //   conn.write('Move: left');
    // }, 550);
    // setTimeout(() => {
    //   conn.write('Move: down');
    // }, 1050);
  })

  return conn;
};

module.exports = { connect };