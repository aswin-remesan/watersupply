const express = require('express'),
  router = express.Router();



// get customer list
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM customers`;
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Customer list retrieved successfully"
    })
  })
});

// create new customer
router.post('/new', function(req, res) {
  let sql = `INSERT INTO customers(name, m_no, building_name, flat_no, area, coupons) VALUES (?)`;
  let values = [
    req.body.name,
    req.body.m_no,
    req.body.building_name,
    req.body.flat_no,
    req.body.area,
    req.body.coupons
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New customer added successfully"
    })
  })
});

module.exports = router;