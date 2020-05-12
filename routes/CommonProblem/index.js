var express = require('express');
var router = express.Router();

router.get('/tool', function(req, res, next) {
    res.render('CommonProblem/tool', { title: '工具' });
});
router.get('/ranking', function(req, res, next) {
    res.render('CommonProblem/ranking', { title: '排行' });
});
router.get('/activity', function(req, res, next) {
    res.render('CommonProblem/activity', { title: '活动' });
});
router.get('/information', function(req, res, next) {
    res.render('CommonProblem/information', { title: '消息' });
});
router.get('/team', function(req, res, next) {
    res.render('CommonProblem/team', { title: '团队' });
});
router.get('/integral', function(req, res, next) {
    res.render('CommonProblem/integral', { title: '积分' });
});
router.get('/achievement', function(req, res, next) {
    res.render('CommonProblem/achievement', { title: '成就' });
});
router.get('/level', function(req, res, next) {
    res.render('CommonProblem/level', { title: '级别' });
});
// 添加团队路由
router.get('/teamChildren', function(req, res, next) {
  res.render('CommonProblem/team/addTeam', { title: '添加工人信息' });
});




module.exports = router;
