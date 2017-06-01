describe('constants', () => {
  let component;

  before(() => {
    component = require('../constants');
  });

  after(() => {
    delete component;
  });

  context('Real-Time APIs', () => {
    it('has a base URL specified', () => {
      expect(component.BASE_URL.API).to.be.a('string');
    });
  });

  context('Data-Store (CKAN) APIs', () => {
    it('has a base URL specified', () => {
      expect(component.BASE_URL.CKAN).to.be.a('string');
    });
  });
});