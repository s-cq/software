var express = require('express');
var router = express.Router();

/* GET users listing. */
// 押金
router.get('/deposit', function(req, res, next) {
  res.render('Money/deposit', { title: 'Express' });
});
// 质保金
router.get('/quality', function(req, res, next) {
  res.render('Money/quality', { title: 'Express' });
});
module.exports = router;
