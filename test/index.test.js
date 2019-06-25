const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

//will be uncomment when created main page ( localhost:3000/ )

// describe('Node start server', () => {
//   it('(GET /) returns main page', (done) =>{
//       chai.request(server)
//       .get('/')
//       .end((err, res) => {
//         res.should.have.status(200);
//         done();
//       })
//   })
// });

//login page GET simple unit test
describe('login page', () => {
  it('(GET /login) returns login page', (done) => {
    chai.request(server)
      .get('/login')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      })
  })
});

//login page POST with dummy account simple unit test
describe('login page', () => {
  it('(POST /login) returns login page', (done) => {
    chai.request(server)
      .post('/login')
      .send({ email: 'example@example.com', password: 'dummy1234' })
      .end((err, res) => {
        res.should.have.status(200);
        done();
      })
  })
});

//albums page GET simple unit page
describe('albums page', () => {
  it('(GET /album) returns album page', (done) => {
    chai.request(server)
      .get('/album')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      })
  })
})
