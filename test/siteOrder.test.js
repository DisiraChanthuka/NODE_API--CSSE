const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Import your Express app here

const expect = chai.expect;
chai.use(chaiHttp);

describe('Site Order API Tests', () => {
  let createdOrderId;

  // Setup: Create a new site order before running the tests
  before((done) => {
    const newOrder = {
      userId: '652cdf2794a020d8edbed481',
      Company: 'Test Company 01',
      Warehouse: 'Test Warehouse',
      Reference: 'Test Reference',
      Required_Date: '2023-10-20', // Change to a valid date
    };

    chai
      .request(app)
      .post('/storeSiteOrder')
      .send(newOrder)
      .end((err, res) => {
        createdOrderId = res.body.success._id;
        done();
      });
  });

  // Cleanup: Delete the created site order after the tests
  after((done) => {
    chai
      .request(app)
      .post('/deletSiteOrder')
      .send({ id: createdOrderId })
      .end(() => {
        done();
      });
  });

  // Test creating a new site order
  it('should create a new site order', (done) => {
    // Your test code here
    const newOrder = {
      userId: '652cdf2794a020d8edbed481',
      Company: 'Test Company 02',
      Warehouse: 'Test Warehouse',
      Reference: 'Test Reference',
      Required_Date: '2023-10-20', // Change to a valid date
    };

    chai
      .request(app)
      .post('/storeSiteOrder')
      .send(newOrder)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('success');
        done();
      });
  });

  // Test getting a site order
  it('should get a site order', (done) => {
    chai
      .request(app)
      .post('/getSiteOrderList')
      .send({ userId: '652cdf2794a020d8edbed481' }) // Provide a valid user ID
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('status').to.equal(200);
        expect(res.body).to.have.property('success').to.be.an('array');
        done();
      });
  });

  // Test updating a site order
  it('should update a site order', (done) => {
    // Your test code here
    const updatedOrder = {
      id: createdOrderId,
      Company: 'Updated Company Name',
      Warehouse: 'Updated Warehouse Name',
    };

    chai
      .request(app)
      .put('/updateSiteOrder')
      .send(updatedOrder)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('success');
        done();
      });
  });

  // Test deleting a site order
  it('should delete a site order', (done) => {
    // Your test code here
    chai
      .request(app)
      .post('/deletSiteOrder')
      .send({ id: createdOrderId })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('success');
        done();
      });
  });
});
