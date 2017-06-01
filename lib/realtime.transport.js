const request = require('superagent');
const Q = require('q');

const {
  BASE_URL,
  REAL_TIME
} = require('../constants');

function RealTimeTransport() {
  return {
    getTaxiAvailability: (() => {
      const q = Q.defer();
      const action = `/${REAL_TIME.TRANSPORT.BASE_URI}${REAL_TIME.TRANSPORT.TAXI_AVAILABILITY}`;
      request
        .get(`${BASE_URL.API}${action}`)
        .set('api-key', this.consumerKey)
        .end((err, result) => {
          const returnableData = err ? err.response : result.body;
          q[err ? 'reject' : 'resolve'](returnableData);
        });
      return q.promise;
    }).bind(this)
  };
};

exports = module.exports = RealTimeTransport;