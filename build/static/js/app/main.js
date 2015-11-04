//实例化应用
var app = angular.module('app',[]);

//case列表
var caseList=[
  {
    cover: "http://photo.xuefo.net/user/editor5/asp/upload//2014223/13931283537056.jpg",
    name: '组件名称',
    uploader: 'Pace Zhong',
    intro: '组件简介',
    site: 'www.baidu.com'//不需要带协议
  }
]

for(var i=0; i<21; i++){
  var item={
    cover: (i%2==0) ?'http://d01.res.meilishuo.net/pic/m/35/5c/2cf9e5dbe3296663da1dfc55083e_510_408.jpg':'http://photo.xuefo.net/user/editor5/asp/upload//2014223/13931283537056.jpg',
    name: 'Component Name',
    uploader: (i%2==0) ? 'Nancy Liu' : 'Pace Zhong',
    intro: (i%2==0) ? '3岁哪年,采蘑菇的你遇到了我...' :'3岁哪年,我执酒仗剑于江湖...',
    site: '官网'
  }
  caseList.push(item);
}

//定义control
app.controller('control', function($scope,$sce) {
  $scope.datasets = caseList;
});

//指令
app.directive('tmpHeader', function($document) {
  var options={
    templateUrl: '/build/static/template/header.html',
    replace: true
  };
  return options;
});


app.directive('tmpFooter', function() {
  var options={
    templateUrl: '/build/static/template/footer.html',
    replace: true
  };
  return options;
});

app.directive('search', function() {
  var options={
    template: '<input type="text" id="search" ng-model="query"/>',
    replace: true
  };
  return options;
});

app.directive('caseList', function($sce) {
 var html='';
      html+='<div class="row">';
        html+='<div class="col s12 m6 l4" ng-repeat="case in datasets | filter:query">';
         html+='<div class="card blue lighten-1 waves-effect waves-teal">';
           html+='<div class="card-content white-text">';
             html+='<span class="card-title" ng-bind-html="case.name | hightLightStr:query"></span>';
               html+='<p><img width="100%" height="200" ng-src="{{case.cover}}" /></p>';
           html+='</div>';
           html+='<div class="card-action case-info row white-text">';
            html+='<div class="col s7 m7 l7">';
              html+='上传者：<span ng-bind-html="case.uploader | hightLightStr:query"></span>';
            html+='</div>';
            html+='<div class="col s5 m5 l5 right-align">';
              html+='<a target="_blank" ng-href="//{{case.site}}">官方网址</a>';
            html+='</div>';
            html+='<div class="col s12 m12 l12">';
              html+='<span ng-bind-html="case.intro | hightLightStr:query"></span>';
            html+='</div>';
           html+='</div>';
         html+='</div>';
        html+='</div>';
      html+='</div>';

  var options={
      template: html,
      replace: true
  };
  return options;
});


app.filter('hightLightStr', ['$sce', function ($sce) {
  return function (text,query) {
    if(query){
      text=ui.hightLightStr(text,query);
    }
    return $sce.trustAsHtml(text);
  };
}]);
