const DataDotGov = require('../');

describe('lib/RealTime', () => {
  let component;
  before(() => {
    component = DataDotGov.RealTime;
  });

  after(() => {
    delete component;
  });

  context('.Environment', () => {
    it('exists', () => {
      expect(component).to.contain.key('Environment');
    });
  });

  context('.Transport', () => {
    it('exists', () => {
      expect(component).to.contain.key('Transport');
    });
  });
});
