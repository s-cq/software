var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});
router.get('/loginout', function(req, res, next) {
  res.render('loginout', { title: '退出' });
});


router.get('/', function(req, res, next) {
  res.redirect('index?id=0')
});


router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test1', function(req, res, next) {
  res.render('test1', { title: 'Express' });
});
router.get('/test2', function(req, res, next) {
  //islogin(res)
  res.render('test2', { title: 'Express' });
});
// 模本页面
router.get('/template', function(req, res, next) {
    //islogin(res)
    res.render('template/detail', { title: 'Express' });
});

function islogin(res){
  if(1==2){

  }
  else{
    res.redirect('https://www.rxjy.com/public/login/login');
  }
}






module.exports = router;
