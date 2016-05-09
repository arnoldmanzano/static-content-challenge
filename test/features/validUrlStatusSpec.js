var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Valid URL', function() {
  it('should give a status code 200 for OK', function(done) {
    chai.request('http://localhost:8000')
      .get('/about-page')
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});
