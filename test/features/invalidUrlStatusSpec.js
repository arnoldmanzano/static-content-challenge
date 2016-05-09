var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Invalid URL', function() {
  it('should give a status code 404 for not found', function(done) {
    chai.request('http://localhost:8000')
      .get('/invalid-page')
      .end(function(err, res) {
        expect(res).to.have.status(404);
        done();
      });
  });
});
