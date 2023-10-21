const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Import your Express app here

const expect = chai.expect;
chai.use(chaiHttp);

describe('User API Tests', () => {
  let createdUserId;
  const testUser = {
    email: 'v@gmail.com',
    password: 'testpassword',
  };

  // Setup: Create a new user before running the tests
  before(function (done) {
    this.timeout(5000); // Increase the timeout to 5 seconds

    chai
      .request(app)
      .post('/registration')
      .send(testUser)
      .end((err, res) => {
        createdUserId = res.body.success._id;
        done();
      });
  });

  // Test user registration
  it('should register a new user', (done) => {
    // Your test code here
    const newUser = {
      email: 'n@gmail.com',
      password: 'newpassword',
    };

    chai
      .request(app)
      .post('/registration')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('success');
        done();
      });
  });

  // Test user login
  it('should log in a user', (done) => {
    // Your test code here
    const loginCredentials = {
      email: testUser.email,
      password: testUser.password,
    };

    chai
      .request(app)
      .post('/login')
      .send(loginCredentials)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('token');
        done();
      });
  });
  
});
