var express = require('express');
var router = express.Router();
router.get('/consultation', function(req, res, next) {
  res.render('pdm/consultation', { title: '咨询' });
});
router.get('/cognition', function(req, res, next) {
    res.render('pdm/cognition', { title: '认知' });
});
router.get('/investigate', function(req, res, next) {
  res.render('pdm/investigate', { title: '考察' });
});
router.get('/signing', function(req, res, next) {
    res.render('pdm/signing', { title: '签约' });
});

module.exports = router;
