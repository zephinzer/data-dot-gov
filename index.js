const express = require('express');
const path = require('path');
const request = require('superagent');
const Q = require('q');

const RealTime = require('./lib/realtime');
const DataStore = require('./lib/datastore');

const DataDotGov = {};
DataDotGov.consumerKey = process.env.DATAGOVSG_CONSUMER_KEY || '';
DataDotGov.setConsumerKey = function(consumerKey) {
  this.consumerKey = consumerKey;
};
DataDotGov.DataStore = DataStore.bind(DataDotGov)();
DataDotGov.RealTime = RealTime.bind(DataDotGov)();

exports = module.exports = DataDotGov;

const server = express();
server.use('/', express.static(path.resolve('./coverage/lcov-report')));

server.listen(process.env.PORT || 8888);
