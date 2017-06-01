
/**
 * <BASE_URL_CONFIG>
 * 
 * Do not touch unless documentation changes.
 * Source: https://data.gov.sg/developer
 * Last Updated: 31 May 2017
 */
const CKAN_HOST = 'https://data.gov.sg/api';
const CKAN_VERSION = '3';
const CKAN_BASE_URI = '/action'

const API_HOST = 'https://api.data.gov.sg';
const API_VERSION = 'v1';
const API_BASE_URI = '';
/**
 * </BASE_URL_CONFIG>
 */

/**
 * <BASE_URL>
 */
const BASE_URL = {
  API: `${API_HOST}/${API_VERSION}${API_BASE_URI}`,
  CKAN: `${CKAN_HOST}/${CKAN_VERSION}${CKAN_BASE_URI}`
};
/**
 * </BASE_URL>
 */

/**
 * <CATEGORIES>
 * 
 * Following categories are retrieved from top navigation bar labelled Topics on
 * https://data.gov.sg/. Feel free to add more as needed!
 */
const DATA_STORE = {
  SEARCH: 'datastore_search',
  PACKAGE_META: 'package_metadata_show',
  RESOURCE_META: 'resource_metadata_show',
  ECONOMY: {},
  EDUCATION: {},
  ENVIRONMENT: {},
  FINANCE: {},
  HEALTH: {},
  INFRASTRUCTURE: {},
  SOCIETY: {},
  TECHNOLOGY: {},
  TRANSPORT: {}
};

const REAL_TIME = {
  ENVIRONMNET: {
    BASE_URI: '/environment',

  },
  TRANSPORT: {
    BASE_URI: '/transport',
    // https://developers.data.gov.sg/transport/taxi-availability
    TAXI_AVAILABILITY: '/taxi-availability'
  },
};
/**
 * </CATEGORIES>
 */

exports = module.exports = {
  BASE_URL,
  DATA_STORE,
  REAL_TIME
};
