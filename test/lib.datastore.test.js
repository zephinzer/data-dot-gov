const DataDotGov = require('../');

describe('lib/DataStore', () => {
  const TEST_PACKAGE_NAME = 'dengue-cases';
  const TEST_RESOURCE_IDENTIFIER = '885cd5fd-e163-45e4-a93f-44dedee4306a';
  let component;
  let resources;

  before(() => {
    component = DataDotGov.DataStore;
  });

  after(() => {
    delete component;
  });

  context('.getPackageInfo', () => {
    it('retrieves package information given a CKAN API endpoint', () => {
      expect(typeof component.getPackageInfo).to.equal('function');
    });
    it('works as expected', (done) => {
      component.getPackageInfo(TEST_PACKAGE_NAME)
        .then((data) => {
          expect(data.identifier).not.to.be.undefined;
          resources = data.resources;
          done();
        })
        .catch(done);
    });
    it('fails as expected', (done) => {
      component.getPackageInfo('malaria-cases').then(done).catch((err) => {
        expect(err.notFound).to.eq(true);
        done();
      });
    })
  });
  context('.getResourceInfo', () => {
    let resource;
    before(() => {
      expect(resources).to.be.a('Array');
      expect(resources.length).to.be.above(0);
      resource = resources[0];
    });
    after(() => {
      delete resource;
    });
    it('retrieves information about a resource given it\'s id', () => {
      expect(typeof component.getResourceInfo).to.equal('function');
    });
    it('works as expected', (done) => {
      component.getResourceInfo(resource.identifier)
        .then((data) => {
          done();
        })
        .catch(done);
    });
  });
  
  context('.query', () => {
    it('queries information about a Data Store resource given it\'s id', () => {
      expect(typeof component.query).to.equal('function');
    });
    it('works as expected', (done) => {
      component.query(TEST_RESOURCE_IDENTIFIER)
        .then((data) => {
          expect(data).to.contain.key('resource_id');
          expect(data.resource_id).to.be.a('string');
          done();
        })
        .catch(done);
    });
    it('can query for a specific year', (done) => {
      component.query(TEST_RESOURCE_IDENTIFIER, 2014)
        .then((data) => {
          expect(data).to.contain.key('resource_id');
          expect(data.resource_id).to.be.a('string');
          done();
        })
        .catch(done);
    });
  });
});