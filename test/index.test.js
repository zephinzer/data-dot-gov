const DataDotGov = require('../');

describe('./index', () => {
  let component;
  before(() => {
    component = DataDotGov;
  });

  after(() => {
    delete component;
  });

  context('configuration', () => {
    it('contains a consumer key', () => {
      expect(component).to.contain.key('consumerKey');
      expect(component.consumerKey).to.be.a('string');
    });

    it('can set a consumer key', () => {
      const currentConsumerKey = component.consumerKey;
      const expectedConsumerKey = 'expected_consumer_key';
      expect(component).to.contain.key('setConsumerKey');
      expect(component.setConsumerKey).to.be.a('function');
      component.setConsumerKey(expectedConsumerKey);
      expect(component.consumerKey).to.equal(expectedConsumerKey);
    });
  });

  context('real-time APIs', () => {
    it('exists', () => {
      expect(component).to.contain.key('RealTime');
    });
  });

  context('data-store APIs', () => {
    it('exists', () => {
      expect(component).to.contain.key('DataStore');
    });
  });
});
