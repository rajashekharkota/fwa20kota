var express = require('express');
const { param } = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let params = req.query['inp'];
  let num;
  if(!params) {
    num = Math.random();
  } else {
    num = parseInt(params);
  }
  console.log(num)
  const f1 = Math.imul(num)
  const f2 = Math.log(num)
  const f3 = Math.log10(num)
  res.render('bonus', { title: 'Rajashekhar Kota', val: num,  f1, f2, f3});

});

module.exports = router;
