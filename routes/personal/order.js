var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('order/order', { title: '订单' });
});
router.get('/orderDetails', function(req, res, next) {
    // 获取订单名称
    var routeName = req.query.orderName
    var routePath = 'order/template/detail'
    if (routeName === '摄像头') {
        routePath = 'order/details/cameraDetail'
    } else if (routeName === '放线') {
        routePath = 'order/details/fxDetail'
    } else if (routeName === '整改') {
        routePath = 'order/details/changeDetail'
    } else if (routeName === '项经巡检') {
        routePath = 'order/details/inspectionDeatail'
    } else if (routeName === '发包') {
        routePath = 'order/details/contractingDeatail'
    } else if (routeName === '木工' || routeName === '油工' || routeName === '瓦工' || routeName === '壮工' || routeName === '电工' ||  routeName === '拆除') {
        routePath = 'order/details/personDetail'
    }
    res.render(routePath, { title: '进入订单' });
});
// 项订单
router.get('/projectDetail', function(req, res, next) {
    res.render('order/details/project/projectDetail', { title: '订单' });
});

module.exports = router;
