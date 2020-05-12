//添加cookie
function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
};
//获取cookie
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
};
//删除cookie
function delCookie(name) {
   document.cookie = name+"=;expires="+(new Date(0)).toGMTString();
};
//获取url查询字段
function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
        // return unescape(r[2]);
    };
    return null;
};
//当前页面加Class
function getactive(obj,classname){
    var urlstr = location.href;
    var urlstatus=false;
    var currentUrlArray = window.location.pathname.split('/')
    obj.each(function(){
        if (currentUrlArray.length >= 3 && window.location.search) {
          var currentRouteId = Number(window.location.search.split('&')[0].split('=')[1])
          urlstr = '/'+currentUrlArray[1]+'?id='+currentRouteId
        } 
        if (((urlstr + '/').indexOf($(this).attr('href')) > -1) &&$(this).attr('href')!="") {
            $(this).addClass(classname); urlstatus = true;
        }
        else {
            $(this).removeClass(classname);
        }
    });
};
// 排序
function sortFun(attr,rev){
    //第二个参数没有传递 默认升序排列
    if(rev ==undefined){
        rev = 1;
    }  else {
        rev = (rev) ? 1 : -1;
    }
    return function(a,b){
        a = a[attr];
        b = b[attr];
        if(a < b){
            return rev * -1;
        }
        if(a > b){
            return rev * 1;
        }
        return 0;
    }
}
/*-------------------转化类----------------------- */
// 图片放大
function viewer(el, options ) {
    var $image = el || $('.viewer-images');
    // 初始化配置
    $image.viewer($.extend({
        zoomRatio: 0.3,
        url(image) {
            return image.src.split('?')[0];
        },
    }, options));
    var $viewer = $image.data('viewer');
    // 自定义触发事件，当不是直接点击 img 的时候触发
    $image.each(function() {
        $(this).find('.enlarge_viewer').each(function(index) {
        $(this).on('click', function() {
                $viewer.show();
                $viewer.view(index);
            });
        });
    });
};
//项目类型转化
function tftype(type){
    var typeName = ''
    switch (parseInt(type)){ 
      case 1:
        typeName =  "办公"
      break
      case 2: 
         typeName = "餐饮"
      break;
      case 3: 
        typeName = "商业"
      break;
      case 4: 
        typeName = "酒店"
      break;
      case 5: 
        typeName = "其它"
      break;
      case 6: 
        typeName = "教育"
      break;
      case 7: 
        typeName = "会所"
      break;
      case 8: 
        typeName = "家装"
      break;
      case 9: 
        typeName = "别墅"
      break;
    };
};
//项目阶段转化
function tfstage(stage){
    var stageName = ''
    switch (stage) 
    { 
      case 1:
      stageName =  "审计"
      break; 
      case 2: 
      stageName =  "准备"
      break;
      case 3: 
      stageName =  "在施"
      break;
      case 4: 
      stageName =  "竣工"
      break;
      case 5: 
      stageName =  "完工"
      break;
      case 6: 
      stageName =  "历史"
      break;
    };
};
// 时间格式
function formateDate (datetime) {
    if (datetime=== null || datetime=== '') {
            return  '--'
      } else {
      function addDateZero (num) {
            return (num < 10 ? '0' + num : num)
      }
      var d = new Date(datetime)
      var formatdatetime = d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate()) + ' ' + addDateZero(d.getHours()) + ':' + addDateZero(d.getMinutes()) + ':' + addDateZero(d.getSeconds())
      return formatdatetime
    }
}
/**
 * 保留小数点 做一点判断 防止报错
 */
function toFixed(umber, leng){
  let number = Number(umber)
  if (!number) {
      return 0
  } else {
      return number.toFixed(leng)
  }
};
/**
 * 当文字超过一定长度的时候截取文字 number 截取文字的长度
 */
function ellipsisText (name, number) {
  if (!name) return ''
  if (name.length > number) {
      return name.slice(0, number) + '...'
  } else {
      return name
  }
};
// 人才质现订单类型筛选
function tfstageDiy(stage){
    var statename = ''
    if ($('.rxadmin-contentnav li a.active').attr("data-modelType") == 4) {
        switch (Number(stage)) {
        case -5:
            statename = '待审'
            break
        case -3:
            statename = '拒单'
            break
        case -2:
            statename = '选单'
            break
        case -1:
            statename = '待接'
            break
        case 0:
            statename = '待分配'
            break
        case 1:
            statename = '待确认'
            break
        case 2:
            statename = '待施'
            break
        case 3:
            statename = '施工'
            break
        case 4:
            statename = '竣审'
            break
        case 5:
            statename = '返工'
            break
        case 6:
            statename = '结算'
            break
        case 7:
            statename = '评价'
            break
        case 8:
            statename = '历史'
            break
        }

    } else {
        switch (Number(stage)) { 
            case 0:
            statename =  "待办"
            break; 
            case 1: 
            statename =  "待验"
            break;
            case 2: 
            statename =  "完成"
            break;
        }
    }
    return statename
};
// 获取人才质现的阶段数据
function getStage(stage,value) {
    // 截取订单编号
    var code = stage ? stage.split('-')[0] : null
    if (code) {
        var stageName = ''
        if (code === 'G01') {
            switch (Number(value)) {
            case 1:
                stageName = '意接'
                break
            case 2:
                stageName = '接单'
                break
            case 4:
                stageName = '拒单'
                break
            case 5:
                stageName = '退单'
                break
            case 6:
                stageName = '已接'
                break
            default:
                break
            }
        } else if (code === 'X01') {
            switch (Number(value)) {
            case 1:
                stageName = '执行'
                break
            case 3:
                stageName = '待验'
                break
            case 4:
                stageName = '已验'
                break
            default:
                break
            }
        } else if (code === 'G05' || code === 'G08') {
            switch (Number(value)) {
            case 1:
                stageName = '执行'
                break
            case 2:
                stageName = '待验'
                break
            case 6:
                stageName = '已验'
                break
            default:
                break
            }
        } else if (code === 'X11') {
            switch (Number(value)) {
            case 1:
                stageName = '执行'
                break
            case 2:
                stageName = '待验'
                break
            case 6:
                stageName = '历史'
                break
            default:
                break
            }
        } else if (code === 'X12') {
            switch (Number(value)) {
            case 3:
                stageName = '执行'
                break
            case 4:
                stageName = '评价'
                break
            case 6:
                stageName = '历史'
                break
            default:
                break
            }
        } else if (code === 'X13') {
            switch (Number(value)) {
            case 3:
                stageName = '执行'
                break
            case 4:
                stageName = '待评'
                break
            case 6:
                stageName = '历史'
                break
            default:
                break
            }
        } else if (code === 'X14') {
            switch (Number(value)) {
            case 1:
                stageName = '打点'
                break
            case 2:
                stageName = '指定出库'
                break
            case 3:
                stageName = '安装'
                break
            case 4:
                stageName = '拍照'
                break
            case 5:
                stageName = '解绑'
                break
            case 6:
                stageName = '历史'
                break
            default:
                break
            }
        }
        return stageName
    } else {
        return 
    }
};
// 获取人才质现的阶段数据（项目展示区）=
function getProjectStage(value) {
    var stageName = ''
    switch (Number(value)) {
        case 1:
            stageName = '执行中'
            break
        case 2:
            stageName = '已完成'
            break
        default:
            break
        }
    return stageName
}