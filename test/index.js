import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server';

chai.use(chaiHttp);
chai.should();

describe('Return code 200', () => {
  it('should return 200', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
