process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Seller = require('../models/seller');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Books', () => {
    beforeEach((done) => { //Before each test we empty the database
        Seller.remove({}, (err) => { 
           done();           
        });        
    });
/*
  * Test the /GET route
  */
  describe('/GET sellers', () => {
      it('it should GET all sellers', (done) => {
        chai.request(server)
            .get('api/seller')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  

});