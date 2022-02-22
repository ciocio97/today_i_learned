const db = require('../db');

module.exports = {
  items: {
    get: (callback) => {
      // TODO: Cmarket의 모든 상품을 가져오는 함수를 작성하세요
      const queryString = `SELECT * FROM items`;

      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
  },
  orders: {
    get: (userId, callback) => {
      // TODO: 해당 유저가 작성한 모든 주문을 가져오는 함수를 작성하세요
      const queryString = `SELECT orders.id, orders.created_at, orders.total_price, items.name, items.price, items.image, order_items.order_quantity 
                           FROM orders, items, order_items 
                           WHERE orders.id = order_items.order_id 
                           AND order_items.item_id = items.id
                           AND orders.user_id = ${userId}`;
      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
    post: (userId, orders, totalPrice, callback) => {
      // TODO: 해당 유저의 주문 요청을 데이터베이스에 생성하는 함수를 작성하세요
      const queryString1 = `INSERT INTO orders (user_id, total_price) VALUES (${userId}, ${totalPrice})`;
      const queryString2 = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?`;
      
      db.query(queryString1, (error, result) => {
        
        const params = orders.map(el => 
          [
            result.insertId,
            el.itemId,
            el.quantity
          ]
        );

        db.query(queryString2, [params], () => {
          callback(error, result);
        })
      });
    }
  },
};