const fs = require('fs');
const path = require('path');

const DataDotGov = require('../');

describe('lib/RealTime/Transport', () => {
  let component;

  before(() => {
    component = DataDotGov.RealTime.Transport;
  });

  after(() => {
    delete component;
  });

  context('.getTaxiAvailability', () => {
    const expectedType = 'FeatureCollection';
    const expectedKeys = [ 'type', 'crs', 'features' ];

    before(() => {
      expect(DATAGOVSG_CONSUMER_KEY).to.be.a('string');
    });

    it('get locations of available taxis in Singapore', () => {
      expect(typeof component.getTaxiAvailability).to.equal('function');
    });
    it('works as expected (https://developers.data.gov.sg/transport/taxi-availability)', (done) => {
      DataDotGov.setConsumerKey('WZzPDFYFmSy0ViuJeHT1afoNwXp3IUyY');
      component.getTaxiAvailability()
        .then((data) => {
          expect(data).to.have.keys(expectedKeys);
          expect(data.type).to.equal(expectedType);
          done();
        })
        .catch((err) => {
          done(err || new Error('error was returned when consumer key was available'));
        });
    });
    it('requires a consumer key to be set', () => {
      DataDotGov.setConsumerKey('');
      component.getTaxiAvailability()
        .then((data) => {
          done(new Error('no error was returned when consumer key was unavailable'));
        })
        .catch((err) => {
          done();
        });
    });
  });
});