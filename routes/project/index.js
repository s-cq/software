var express = require('express');
var router = express.Router();

router.get('/index', function(req, res, next) {
    res.render('project/index', { title: '项目首页' });
});
router.get('/subject', function(req, res, next) {
    res.render('project/subject', { title: '项目科目' });
});

//人工页面
router.get('/artificial', function(req, res, next) {
    res.render('project/artificial/index', { title: '人工' });
});
//项目订单全部
router.get('/itemOrderAll', function(req, res, next) {
    res.render('project/itemOrder/index', { title: '项目订单全部' });
})
module.exports = router;
