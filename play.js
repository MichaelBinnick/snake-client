const net = require('net');
const { setupInput } = require('./input');
const { connect } = require('./client.js');

console.log('Connecting ...');
const retObj = connect();

setupInput(retObj);