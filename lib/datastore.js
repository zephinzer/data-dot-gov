const request = require('superagent');
const Q = require('q');

const { BASE_URL, DATA_STORE } = require('../constants');

function getDataStoreRequestHandler(q) {
  return (err, result) => {
    const returnableData = err ? err.response : result.body.result;
    q[err ? 'reject' : 'resolve'](returnableData);
  };
};

function DataStore() {
  return {
    getPackageInfo: ((packageName) => {
      const q = Q.defer();
      const action = `/${DATA_STORE.PACKAGE_META}`;
      request
        .get(`${BASE_URL.CKAN}${action}`)
        .query({ id: packageName })
        .end(getDataStoreRequestHandler(q));
      return q.promise;
    }).bind(this),
    getResourceInfo: ((resourceId) => {
      const q = Q.defer();
      const action = `/${DATA_STORE.RESOURCE_META}`;
      request
        .get(`${BASE_URL.CKAN}${action}`)
        .query({ id: resourceId })
        .end(getDataStoreRequestHandler(q));
      return q.promise;
    }).bind(this),
    query: ((resourceId, queryString) => {
      const q = Q.defer();
      const action = `/${DATA_STORE.SEARCH}`;
      request
        .get(`${BASE_URL.CKAN}${action}`)
        .query({ resource_id: resourceId })
        .query({ q: queryString ? queryString : (new Date()).getFullYear() })
        .end(getDataStoreRequestHandler(q));
      return q.promise;
    }).bind(this)
  };
};

exports = module.exports = DataStore;
