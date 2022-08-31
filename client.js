const net = require('net');
const { IP, PORT } = require('./constants.js');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
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