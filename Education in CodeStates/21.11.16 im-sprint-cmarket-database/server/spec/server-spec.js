/* You'll need to have MySQL running and your Node server running
 * for these tests to pass. */

const mysql = require('mysql');
const axios = require('axios');
const expect = require('chai').expect;
const fs = require('fs');
const util = require('util');
const dotenv = require('dotenv');
const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
dotenv.config();

const schema = fs.readFileSync('./schema.sql').toString();
const seed = fs.readFileSync('./seed.sql').toString();
const testDB = 'cmarket_test';

chai.use(chaiHttp);
let dbConnection, app, ordersController, spyGet, spyPost;
describe('🗄  Cmarket Database', () => {
  before((done) => {
    ordersController = require('../controllers');
    spyGet = sinon.spy(ordersController.orders, 'get');
    spyPost = sinon.spy(ordersController.orders, 'post');
    dbConnection = mysql.createConnection({
      user: 'root',
      password: process.env.DATABASE_SPRINT_PASSWORD,
      multipleStatements: true,
    });
    dbConnection.connect(done);
  });

  beforeEach((done) => {
    /* Empty the db table befo test so that multiple tests
     * (or repeated runs of the tests) won't screw each other up: */

    dbConnection.query(
      `DROP DATABASE IF EXISTS ${testDB};
        CREATE DATABASE ${testDB};
        USE ${testDB};
        ${schema}
        ${seed}`,
      () => {
        if (!app) {
          app = require('../app');
        }
        done();
      }
    );
  });

  describe('🗺 -------- Cmarket Router', () => {
    it('users router 파일이 존재해야 합니다', () => {
      let hasUsersRouter = fs.existsSync('./routes/users.js');
      expect(hasUsersRouter).to.be.true;
    });

    it('orders controller에는 get, post 메소드가 각각 존재해야 합니다', () => {
      expect(ordersController.orders).to.have.property('get');
      expect(ordersController.orders).to.have.property('post');
    });

    it('GET /users는 orders controller의 get 메소드를 실행합니다', (done) => {
      axios
        .get('http://localhost:4000/users/1/orders')
        .then(() => {
          expect(spyGet.callCount).to.be.eql(1);
        })
        .then(done)
        .catch(done);
    });

    it('POST /users는 orders controller의 post 메소드를 실행합니다', (done) => {
      axios({
        method: 'post',
        url: 'http://localhost:4000/users/1/orders',
        data: {
          orders: [
            { itemId: 1, quantity: 2 },
            { itemId: 2, quantity: 5 },
          ],
          totalPrice: 79800,
        },
      })
        .then(() => {
          expect(spyPost.callCount).to.be.eql(1);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('🕹 -------- Cmarket Controller', () => {
    it('GET /items 요청에 성공했을 경우 상태코드 200을 보내야합니다.', (done) => {
      chai
        .request(app)
        .get('/items')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('GET /users/:userId/orders 요청에 성공했을 경우 상태코드 200을 보내야합니다.', (done) => {
      chai
        .request(app)
        .get('/users/1/orders')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('POST /users/:userId/orders 요청에서 클라이언트가 잘못된 요청을 했을 경우 상태코드 400을 보내야합니다.', (done) => {
      chai
        .request(app)
        .post('/users/1/orders')
        .send({ totalPrice: 79800 })
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });

    it('POST /users/:userId/orders 요청에 성공했을 경우 상태코드 201을 보내야합니다.', (done) => {
      chai
        .request(app)
        .post('/users/1/orders')
        .send({
          orders: [
            { itemId: 1, quantity: 2 },
            { itemId: 2, quantity: 5 },
          ],
          totalPrice: 79800,
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          done();
        });
    });
  });

  describe('✨-------- Cmarket Model', () => {
    it('데이터베이스에 저장된 상품 목록을 가져와야합니다.', (done) => {
      chai
        .request(app)
        .get('/items')
        .end((err, res) => {
          expect(res.body.length).to.equal(8);
          done();
        });
    });

    it('주문내역을 데이터베이스에 저장해야합니다.', (done) => {
      const query = util.promisify(dbConnection.query).bind(dbConnection);

      chai
        .request(app)
        .post('/users/1/orders')
        .send({
          orders: [
            { itemId: 1, quantity: 2 },
            { itemId: 2, quantity: 5 },
          ],
          totalPrice: 79800,
        })
        .then(() => {
          const queryString = 'SELECT * FROM orders';
          return query(queryString);
        })
        .then((result) => {
          expect(result.length).to.equal(1);
          expect(result[0].total_price).to.equal(79800);
        })
        .then(() => {
          const queryString = 'SELECT * FROM order_items';
          return query(queryString);
        })
        .then((result) => {
          expect(result.length).to.equal(2);
          expect(result[0].order_id).to.equal(1);
          expect(result[0].item_id).to.equal(1);
          expect(result[0].order_quantity).to.equal(2);

          expect(result[1].order_id).to.equal(1);
          expect(result[1].item_id).to.equal(2);
          expect(result[1].order_quantity).to.equal(5);
        })
        .then(done)
        .catch(done);
    });

    it('데이터베이스에 저장된 주문내역을 가져와야합니다.', async () => {
      const postOrder = (data) => {
        return chai.request(app).post('/users/1/orders').send(data);
      };

      const payload = [
        {
          orders: [
            { itemId: 1, quantity: 2 },
            { itemId: 2, quantity: 5 },
          ],
          totalPrice: 79800,
        },
        {
          orders: [
            { itemId: 5, quantity: 1 },
            { itemId: 6, quantity: 2 },
          ],
          totalPrice: 10700,
        },
      ];

      await postOrder(payload[0]);
      await postOrder(payload[1]);

      await chai
        .request(app)
        .get('/users/1/orders')
        .then((res) => res.body)
        .then((data) => {
          expect(data[0].id).to.equal(1);
          expect(data[0].image).to.equal('../images/egg.png');
          expect(data[0].name).to.equal('노른자 분리기');
          expect(data[0].order_quantity).to.equal(2);
          expect(data[0].price).to.equal(9900);
          expect(data[0].total_price).to.equal(79800);

          expect(data[3].id).to.equal(2);
          expect(data[3].image).to.equal('../images/fish.jpg');
          expect(data[3].name).to.equal('잉어 슈즈');
          expect(data[3].order_quantity).to.equal(2);
          expect(data[3].price).to.equal(3900);
          expect(data[3].total_price).to.equal(10700);
        });
    });
  });
  after(() => {
    dbConnection.end();
    app.close();
  });
});
